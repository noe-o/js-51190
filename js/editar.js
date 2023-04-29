class Producto {
  constructor(nombre, descrip, precio) {
    this.nombre = nombre;
    this.descrip = descrip;
    this.precio = parseFloat(precio);
    this.enviogratis = false;
  }
  envioGratis(precioEnvio) {
    this.precio = this.precio + precioEnvio;
    this.envioGratis = true;
  }
}
const productos = JSON.parse(localStorage.getItem('productos')) ?? [];

const crearAceite = () => {
  const formularioCrear = document.querySelector('#crearAceite');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const producto = new Producto(
      datos['nombre'].value,
      datos['descrip'].value,
      datos['precio'].value
    );
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
    formularioCrear.reset();
  });
};

const verProductos = () => {
  const ContenedorProductos = document.querySelector('#aceite');
  productos.forEach((producto) => {
    const tarjetaProducto = document.createElement('div');
    tarjetaProducto.className = 'aceite';
    tarjetaProducto.innerHTML = `
          <form class="editar">
              <input type="text" name="nombre" value="${producto.nombre}">
              <input type="text" name="descrip" value="${producto.descrip}">
              <input type="number" name="precio" value="${producto.precio}">
              <button class="btn" type="submit">Editar</button>
          </form>
          <button class="btn">Borrar</button>`;
    ContenedorProductos.append(tarjetaProducto);
  });
};
crearAceite();
verProductos();
