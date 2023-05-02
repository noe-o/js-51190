const aceites = JSON.parse(localStorage.getItem('aceites')) ?? [];

const ContenedorAceites = document.querySelector('#aceite');
aceites.forEach((aceite) => {
  const tarjetaAceite = document.createElement('div');
  tarjetaAceite.className = 'producto';
  tarjetaAceite.innerHTML = `
        <h4>${aceite.nombre}</h4>
        <p>${aceite.detalle}</p>
        <span>${aceite.precio} Pesos</span>
        <button class="btn btn-success">Comprar</button>`;
  ContenedorAceites.append(tarjetaAceite);
});

const cosmeticas = JSON.parse(localStorage.getItem('cosmeticas')) ?? [];

const ContenedorCosmetica = document.querySelector('#cosmetica');
cosmeticas.forEach((cosmetica) => {
  const tarjetaCosmetica = document.createElement('div');
  tarjetaCosmetica.className = 'producto';
  tarjetaCosmetica.innerHTML = `
        <h4>${cosmetica.nombre}</h4>
        <p>${cosmetica.detalle}</p>
        <span>${cosmetica.precio} Pesos</span>
        <button class="btn btn-success">Comprar</button>`;
  ContenedorCosmetica.append(tarjetaCosmetica);
});

const aceitunas = JSON.parse(localStorage.getItem('aceitunas')) ?? [];

const ContenedorAceitunas = document.querySelector('#aceituna');
aceitunas.forEach((aceituna) => {
  const tarjetaAceitunas = document.createElement('div');
  tarjetaAceitunas.className = 'producto';
  tarjetaAceitunas.innerHTML = `
        <h4>${aceituna.nombre}</h4>
        <p>${aceituna.detalle}</p>
        <span>${aceituna.precio} Pesos</span>
        <button class="btn btn-success">Comprar</button>`;
  ContenedorAceitunas.append(tarjetaAceitunas);
});