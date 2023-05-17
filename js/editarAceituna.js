class Aceituna {
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

const aceitunasLit = JSON.parse(localStorage.getItem('aceitunas')) ?? [];
const aceitunas = [];
aceitunasLit.forEach((aceituna) => {
  aceitunas.push(
    new Aceite(
      aceituna.id,
      aceituna.nombre,
      aceituna.descrip,
      aceituna.stock,
      aceituna.precio
    )
  );
});

const mensaje = (mensaje) => {
  Toastify({
    text: mensaje,
    duration: 1000,
  }).showToast();
};

const borrarAceituna = (id) => {
  const borrarAceitunaBtn = document.querySelector('#btnBorrar' + id);
  borrarAceitunaBtn.addEventListener('click', () => {
    const index = aceitunas.findIndex((aceituna) => aceituna.id == id);
    aceitunas.splice(index, 1);
    localStorage.setItem('aceitunas', JSON.stringify(aceitunas));
    const tarjetaAceituna = document.querySelector('#aceituna' + id);
    tarjetaAceituna.remove();
    mensaje('Se borró la aceituna correctamente');
  });
};
const editarAceituna = (id) => {
  const editarAceitunaForm = document.querySelector('#editar' + id);
  editarAceitunaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const index = aceitunas.findIndex((aceituna) => aceituna.id == id);
    aceitunas[index].nombre = datos['nombre'].value;
    aceitunas[index].detalle = datos['detalle'].value;
    aceitunas[index].precio = datos['precio'].value;
    aceitunas[index].stock = datos['stock'].value;
    localStorage.setItem('aceitunas', JSON.stringify(aceitunas));
    mensaje('Se actualizó correctamente la aceituna');
  });
};
const verAceituna = (aceituna, contenidoTarjeta) => {
  const contenedorAceitunas = document.querySelector('#aceitunas');
  const tarjetaAceituna = document.createElement('div');
  tarjetaAceituna.className = 'aceituna';
  tarjetaAceituna.id = 'aceituna' + aceituna.id;
  tarjetaAceituna.innerHTML = contenidoTarjeta;
  contenedorAceitunas.append(tarjetaAceituna);
};

const crearAceituna = () => {
  const formularioCrear = document.querySelector('#crearAceituna');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    let idAceituna = parseInt(localStorage.getItem('idAceituna') || 0);
    const datos = e.target.children;
    const aceituna = new Aceituna(
      idAceituna,
      datos['nombre'].value,
      datos['detalle'].value,
      datos['precio'].value,
      datos['stock'].value
    );
    aceitunas.push(aceituna);
    localStorage.setItem('aceitunas', JSON.stringify(aceitunas));
    formularioCrear.reset();
    idAceituna++;
    localStorage.setItem('idAceituna', idAceituna);
    verAceituna(aceituna, aceituna.verEditar());
    borrarAceituna(aceituna.id);
    editarAceituna(aceituna.id);
    mensaje('Se creó correctamente el producto');
  });
};

const verAceitunas = () => {
  aceitunas.forEach((aceituna) => {
    verAceituna(aceituna, aceituna.verEditar());
    borrarAceituna(aceituna.id);
    editarAceituna(aceituna.id);
  });
};
crearAceituna();
verAceitunas();
