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
  const formularioCrear = document.querySelector('#crearAceituna');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const aceituna = new Aceituna(
      datos['nombre'].value,
      datos['detalle'].value,
      datos['precio'].value
    );
    aceitunas.push(aceituna);
    localStorage.setItem('aceitunas', JSON.stringify(aceitunas));
    formularioCrear.reset();
  });
};

const verAceituna = () => {
  const ContenedorAceituna = document.querySelector('section#aceituna');
  aceitunas.forEach((aceituna) => {
    const tarjetaAceituna = document.createElement('div');
    tarjetaAceituna.className = 'producto';
    tarjetaAceituna.innerHTML = `
          <form class="formulario">
              <input type="text" name="nombre" value="${aceituna.nombre}">
              <input type="text" name="detalle" value="${aceituna.detalle}">
              <input type="number" name="precio" value="${aceituna.precio}">
              <button class="btn" type="submit">Editar</button>
          </form>
          <button class="btn">Borrar</button>`;
    ContenedorAceituna.append(tarjetaAceituna);
  });
};
crearAceituna();
verAceituna();
