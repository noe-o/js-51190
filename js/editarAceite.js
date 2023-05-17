class Aceite {
  constructor(id, nombre, detalle, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
  }
  verEditar() {
    return `
    <form class="editar" id="editar${this.id}">
        <textarea type="text" name="nombre">${this.nombre}</textarea>
        <textarea type="text" name="descrip">${this.detalle}</textarea>
        <input type="number" name="precio" value="${this.precio}">
        <input type="number" name="stock" value="${this.stock}">
        <button class="btn" type="submit">Editar</button>
    </form>
    <button class="btn" id="btnBorrar${this.id}">Borrar</button>`;
  }
  verTarjeta() {
    return `
    <h3>${this.nombre}</h3>
    <p>${this.detalle}</p>
    <span>Precio: ${this.precio} Pesos </span>
    <span> Stock:${this.stock}</span>
    <form id="carrito${this.id}">
    <label>Cantidad deseada</label>
    <input type="number" min="1" max="${this.stock}" name="cantidad" value="1"> 
    <button type="submit" class="btn">Carrito</button>
    </form>
    `;
  }
}

const aceitesLit = JSON.parse(localStorage.getItem('aceites')) ?? [];
const aceites = [];
aceitesLit.forEach((aceite) => {
  aceites.push(
    new Aceite(
      aceite.id,
      aceite.nombre,
      aceite.descrip,
      aceite.stock,
      aceite.precio
    )
  );
});

const mensaje = (mensaje) => {
  Toastify({
    text: mensaje,
    duration: 1000,
  }).showToast();
};

const borrarAceite = (id) => {
  const borrarAceiteBtn = document.querySelector('#btnBorrar' + id);
  borrarAceiteBtn.addEventListener('click', () => {
    const index = aceites.findIndex((aceite) => aceite.id == id);
    aceites.splice(index, 1);
    localStorage.setItem('aceites', JSON.stringify(aceites));
    const tarjetaAceite = document.querySelector('#aceite' + id);
    tarjetaAceite.remove();
    mensaje('se borro el AOVE correctamente');
  });
};
const editarAceite = (id) => {
  const editarAceiteForm = document.querySelector('#editar' + id);
  editarAceiteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const index = aceites.findIndex((aceite) => aceite.id == id);
    aceites[index].nombre = datos['nombre'].value;
    aceites[index].descrip = datos['detalle'].value;
    aceites[index].precio = datos['precio'].value;
    aceites[index].stock = datos['stock'].value;
    localStorage.setItem('aceites', JSON.stringify(aceites));
    mensaje('Se actualizó correctamente el AOVE');
  });
};
const verAceite = (aceite, contenidoTarjeta) => {
  const contenedorAceites = document.querySelector('#aceites');
  const tarjetaAceite = document.createElement('div');
  tarjetaAceite.className = 'aceite';
  tarjetaAceite.id = 'aceite' + aceite.id;
  tarjetaAceite.innerHTML = contenidoTarjeta;
  contenedorAceites.append(tarjetaAceite);
};

const crearAceite = () => {
  const formularioCrear = document.querySelector('#crearAceite');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    let idAceite = parseInt(localStorage.getItem('idAceite') || 0);
    const datos = e.target.children;
    const aceite = new Aceite(
      idAceite,
      datos['nombre'].value,
      datos['detalle'].value,
      datos['precio'].value,
      datos['stock'].value
    );
    aceites.push(aceite);
    localStorage.setItem('aceites', JSON.stringify(aceites));
    formularioCrear.reset();
    idAceite++;
    localStorage.setItem('idAceite', idAceite);
    verAceite(aceite, aceite.verEditar());
    borrarAceite(producto.id);
    editarAceite(aceite.id);
    mensaje('Se creó correctamente el producto');
  });
};

const verAceites = () => {
  aceites.forEach((aceite) => {
    verAceite(aceite, aceite.verEditar());
    borrarAceite(aceite.id);
    editarAceite(aceite.id);
  });
};
verAceites();
crearAceite();
