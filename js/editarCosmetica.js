class Cosmetica {
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

const cosmeticasLit = JSON.parse(localStorage.getItem('cosmeticas')) ?? [];
const cosmeticas = []
cosmeticasLit.forEach((cosmetica) => {
  aceitunas.push(
    new Cosmetica(
      cosmetica.id,
      cosmetica.nombre,
      cosmetica.descrip,
      cosmetica.stock,
      cosmetica.precio
    )
  );
});
const mensaje = (mensaje) => {
  Toastify({
    text: mensaje,
    duration: 1000,
  }).showToast();
};

const borrarCosmetica = (id) => {
  const borrarCosmeticaBtn = document.querySelector('#btnBorrar' + id);
  borrarCosmeticaBtn.addEventListener('click', () => {
    const index = cometicas.findIndex((cosmetica) => cosmetica.id == id);
    cosmeticas.splice(index, 1);
    localStorage.setItem('cosmeticas', JSON.stringify(cosmeticas));
    const tarjetaCosmetica = document.querySelector('#cosmetica' + id);
    tarjetaCosmetica.remove();
    mensaje('Se borró su selección correctamente');
  });
};
const editarCosmetica = (id) => {
  const editaCosmeticaForm = document.querySelector('#editar' + id);
  editarCosmeticaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const index = cosmeticas.findIndex((cosmetica) => cosmetica.id == id);
    cosmeticas[index].nombre = datos['nombre'].value;
    cosmeticas[index].detalle = datos['detalle'].value;
    cosmeticas[index].precio = datos['precio'].value;
    cosmeticas[index].stock = datos['stock'].value;
    localStorage.setItem('cosmeticas', JSON.stringify(cosmeticas));
    mensaje('Se actualizó correctamente la selección');
  });
};
const verCosmetica = (cosmetica, contenidoTarjeta) => {
  const contenedorCosmeticas = document.querySelector('#cosmeticas');
  const tarjetaCosmetica = document.createElement('div');
  tarjetaCosmetica.className = 'cosmetica';
  tarjetaCosmetica.id = 'cosmetica' + cosmetica.id;
  tarjetaCosmetica.innerHTML = contenidoTarjeta;
  contenedorcCosmeticas.append(tarjetaCosmetica);
};

const crearCosmetica = () => {
  const formularioCrear = document.querySelector('#crearCosmetica');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const cosmetica = new Cosmetica(
      idCosmetica,
      datos['nombre'].value,
      datos['detalle'].value,
      datos['precio'].value,
      datos['stock'].value
    );
    cosmeticas.push(cosmetica);
    localStorage.setItem('cosmeticas', JSON.stringify(cosmeticas));
    formularioCrear.reset();
    idCosmetica++;
    localStorage.setItem('idCosmetica', idCosmetica);
    verCosmetica(cosmetica, cosmetica.verEditar());
    borrarCosmetica(cosmetica.id);
    editarCosmetica(cosmetica.id);
    mensaje('Se creó correctamente el producto');
  });
};

const verCosmeticas = () => {
  cosmeticas.forEach((cosmetica) => {
   verCosmetica(cosmetica,cosmetica.verEditar())
   borrarCosmetica(cosmetica.id)
   editarCosmetica(cosmetica.id)
  });
};
verCosmeticas();
crearCosmetica();