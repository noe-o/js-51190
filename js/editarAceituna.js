class Aceituna {
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
const aceitunas = JSON.parse(localStorage.getItem('aceitunas')) ?? [];

const crearAceituna = () => {
  const formularioCrear = document.querySelector('#crearAceite');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const aceitunas = new Aceituna(
      datos['nombre'].value,
      datos['detalle'].value,
      datos['precio'].value
    );
    aceitunas.push(aceitunas);
    localStorage.setItem('aceitunas', JSON.stringify(aceitunas));
    formularioCrear.reset();
  });
};

const verAceituna = () => {
  const ContenedorAceituna = document.querySelector('#aceituna');
  aceitunas.forEach((aceituna) => {
    const tarjetaAceituna = document.createElement('div');
    tarjetaAceituna.className = 'aceituna';
    tarjetaAceituna.innerHTML = `
          <form class="editar">
              <input type="text" name="nombre" value="${producto.nombre}">
              <input type="text" name="detalle" value="${producto.detalle}">
              <input type="number" name="precio" value="${producto.precio}">
              <button class="btn" type="submit">Editar</button>
          </form>
          <button class="btn">Borrar</button>`;
    ContenedorAceituna.append(tarjetaAceituna);
  });
};
crearAceituna();
verAceituna();
