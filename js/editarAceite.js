class Aceite {
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
const aceites = JSON.parse(localStorage.getItem('aceites')) ?? [];

const crearAceite = () => {
  const formularioCrear = document.querySelector('#crearAceite');
  formularioCrear.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = e.target.children;
    const aceite = new Aceite(
      datos['nombre'].value,
      datos['detalle'].value,
      datos['precio'].value
    );
    aceites.push(aceite);
    localStorage.setItem('aceites', JSON.stringify(aceites));
    formularioCrear.reset();
  });
};

const verAceites = () => {
  const ContenedorAceites = document.querySelector('#aceite');
  aceites.forEach((aceite) => {
    const tarjetaAceite = document.createElement('div');
    tarjetaAceite.className = 'producto';
    tarjetaAceite.innerHTML = `
          <form class="card editar">
              <input type="text" name="nombre" value="${aceite.nombre}">
              <input type="text" name="detalle" value="${aceite.detalle}">
              <input type="number" name="precio" value="${aceite.precio}">
              <button class="btn" type="submit">Editar</button>
          </form>
          <button class="btn">Borrar</button>`;
    ContenedorAceites.append(tarjetaAceite);
  });
};
crearAceite();
verAceites();
