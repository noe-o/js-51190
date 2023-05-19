class Producto {
  constructor(id, nombre, detalle, stock, precio) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
    this.stock = parseInt(stock);
    this.precio = parseFloat(precio);
  }
  verEditar() {
    return `
      <form class="editar" id="editar${this.id}">
          <textarea type="text" name="nombre">${this.nombre}</textarea>
          <textarea type="text" name="detalle">${this.detalle}</textarea>
          <input type="number" name="precio" value="${this.precio}">
          <input type="number" name="stock" value="${this.stock}">
          <button class="btn" type="submit">Editar</button>
      </form>
      <button class="btn bg-verde" id="btnBorrar${this.id}">Borrar</button>`;
  }
  verTarjeta() {
    return `
      <h3>${this.nombre}</h3>
      <p>${this.detalle}</p>
      <span>Precio: $${this.precio}</span>
      <span> Stock:${this.stock} unidades</span>
      <form id="carrito${this.id}">
      <label>Cantidad deseada</label>
      <input type="number" min="1" max="${this.stock}" name="cantidad" value="1">
      <br/> 
      <button type="submit" class="btn">Carrito</button>
      </form>
      `;
  }
}

const productosLiterales = JSON.parse(localStorage.getItem('productos')) ?? [];
const productos = [];
productosLiterales.forEach((producto) => {
  productos.push(
    new Producto(
      producto.id,
      producto.nombre,
      producto.detalle,
      producto.stock,
      producto.precio
    )
  );
});

const mensaje = (mensaje) => {
  Toastify({
    text: mensaje,
    duration: 1000,
    style: {
      background: '#d8f799',
    },
  }).showToast();
};

const borrarProducto = (id) => {
  const borrarProductoBtn = document.querySelector('#btnBorrar' + id);
  borrarProductoBtn.addEventListener('click', () => {
    const index = productos.findIndex((producto) => producto.id == id);
    productos.splice(index, 1);
    localStorage.setItem('productos', JSON.stringify(productos));
    const tarjetaProducto = document.querySelector('#producto' + id);
    tarjetaProducto.remove();
    mensaje('El producto se borró');
  });
};
const editarProducto = (id) => {
  const editarProductoForm = document.querySelector('#editar' + id);
  editarProductoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const index = productos.findIndex((producto) => producto.id == id);
    productos[index].nombre = datos['nombre'].value;
    productos[index].detalle = datos['detalle'].value;
    productos[index].precio = datos['precio'].value;
    productos[index].stock = datos['stock'].value;
    localStorage.setItem('productos', JSON.stringify(productos));
    mensaje('El producto se actualizó');
  });
};
const verProducto = (producto, contenidoTarjeta) => {
  const contenedorProductos = document.querySelector('#productos');
  const tarjetaProducto = document.createElement('div');
  tarjetaProducto.className = 'producto';
  tarjetaProducto.id = 'producto' + producto.id + producto.categoria;
  tarjetaProducto.innerHTML = contenidoTarjeta;
  contenedorProductos.append(tarjetaProducto);
};

const crearProducto = () => {
  const formularioCrear = document.querySelector('#crearProducto');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    let idProducto = parseInt(localStorage.getItem('idProducto') || 0);
    const datos = e.target.children;
    const producto = new Producto(
      idProducto,
      datos['nombre'].value,
      datos['detalle'].value,
      datos['stock'].value,
      datos['precio'].value
    );
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
    formularioCrear.reset();
    idProducto++;
    localStorage.setItem('idProducto', idProducto);
    verProducto(producto, producto.verEditar());
    borrarProducto(producto.id);
    editarProducto(producto.id);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El producto se creó con éxito',
      showConfirmButton: false,
      timer: 1500,
    });
  });
};

const verProductos = () => {
  productos.forEach((producto) => {
    verProducto(producto, producto.verEditar());
    borrarProducto(producto.id);
    editarProducto(producto.id);
  });
};
