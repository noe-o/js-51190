class Cosmetica {
  constructor(nombre, detalle, precio) {
    this.nombre = nombre;
    this.detalle = detalle;
    this.precio = parseFloat(precio);
    this.enviogratis = false;
  }
  envioGratis(precioEnvio) {
    this.precio = this.precio + precioEnvio;
    this.envioGratis = true;
  }
}
const cosmeticas = JSON.parse(localStorage.getItem('cosmeticas')) ?? [];

const crearCosmetica = () => {
  const formularioCrear = document.querySelector('#crearCosmetica');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const cosmeticas = new Cosmetica(
      datos['nombre'].value,
      datos['detalle'].value,
      datos['precio'].value
    );
    cosmeticas.push(cosmetica);
    localStorage.setItem('cosmeticas', JSON.stringify(cosmeticas));
    formularioCrear.reset();
  });
};

const verCosmetica = () => {
  const ContenedorCosmetica = document.querySelector('#cosmetica');
  cosmeticas.forEach((cosmeticas) => {
    const tarjetaCosmetica = document.createElement('div');
    tarjetaCosmetica.className = 'cosmetica';
    tarjetaCosmetica.innerHTML = `
          <form class="editar">
              <input type="text" name="nombre" value="${producto.nombre}">
              <input type="text" name="detalle" value="${producto.detalle}">
              <input type="number" name="precio" value="${producto.precio}">
              <button class="btn" type="submit">Editar</button>
          </form>
          <button class="btn">Borrar</button>`;
    ContenedorCosmetica.append(tarjetaCosmetica);
  });
};
crearCosmetica();
verCosmetica();
