const productos = JSON.parse(localStorage.getItem("productos")) ?? []

const ContenedorProductos = document.querySelector("#aceite")
productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "aceite"
    tarjetaProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descrip}</p>
        <span>${producto.precio} Pesos</span>
        <button class="btn">Carrito</button>`
ContenedorProductos.append(tarjetaProducto)
})
/*const carrito = [];
let total = 0; 
const compraAceite = () => {
  let elige = prompt(
    'Elige uno de los productos: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
  );
  switch (elige) {
    case '1':
      carrito.push({
        valor: 800,
        nombre: 'AOVE 250ml',
        categoria: 'Aceite',
      });
      break;
    case '2':
      carrito.push({
        valor: 1500,
        nombre: 'AOVE 500ml',
        categoria: 'Aceite',
      });
      break;
    case '3':
      carrito.push({
        valor: 2700,
        nombre: 'AOVE 1lt',
        categoria: 'Aceite',
      });
      break;
    case '4':
      carrito.push({
        valor: 4800,
        nombre: 'AOVE 2lt',
        categoria: 'Aceite',
      });
      break;
    case '5':
      carrito.push({
        valor: 9400,
        nombre: 'AOVE 5lt',
        categoria: 'Aceite',
      });
      break;
    default:
      alert('El dato ingresado es incorrecto');
  }
};
const compraCosmetica = () => {
  let elige = prompt(
    'Elige uno de los productos: 1.Jabón de aceite de oliva 2.Jabón x3 3.Jabonera rústica 4.Combo: 4 jabones + jabonera'
  );
  switch (elige) {
    case '1':
      carrito.push({
        valor: 700,
        nombre: 'Jabón de aceite de oliva',
        categoria: 'Cosmética',
      });
      break;
    case '2':
      carrito.push({
        valor: 1900,
        nombre: 'Jabón x3',
        categoria: 'Cosmética',
      });
      break;
    case '3':
      carrito.push({
        valor: 2000,
        nombre: 'Jabonera rústica',
        categoria: 'Cosmética',
      });
      break;
    case '4':
      carrito.push({
        valor: 4100,
        nombre: 'Combo: 4 jabones + jabonera',
        categoria: 'Cosmética',
      });
      break;
    default:
      alert('El dato ingresado es incorrecto');
  }
};
const compraAceituna = () => {
  let elige = prompt(
    'Elige uno de los productos: 1. Aceituna negra 2.Aceituna verde'
  );
  switch (elige) {
    case '1':
      carrito.push({
        valor: 1900,
        nombre: 'Aceituna negra',
        categoria: 'Aceituna',
      });
      break;
    case '2':
      carrito.push({
        valor: 1900,
        nombre: 'Aceituna verde',
        categoria: 'Aceituna',
      });
      break;
    default:
      alert('El dato ingresado es incorrecto');
  }
};

const compra = () => {
  let grupo = prompt(
    'Elige una de las categorias: \n 1. Aceites de oliva virgen extra \n 2.Cosmética \n 3.Aceitunas sin carozo'
  );
  switch (grupo) {
    case '1':
      compraAceite();
      break;
    case '2':
      compraCosmetica();
      break;
    case '3':
      compraAceituna();
      break;
    default:
      alert('El dato ingresado es incorrecto');
  }
};

const verCarrito = () => {
  carrito.forEach((producto) => {
    alert(
      'Producto: ' +
        producto.nombre +
        ' Precio: $' +
        producto.valor +
        ' Categoría: ' +
        producto.categoria
    );
  });
};

const totalCarrito = () => {
  total = carrito.reduce((total, producto) => total + producto.valor, 0);
  alert('El total a pagar es: $' + total);
};

const inicializar = () => {
  let continuar = confirm('¿Quiere comprar algún producto de la finca?');
  while (continuar) {
    compra();
    continuar = confirm('¿Quiere comprar otro producto de la finca?');
  }
};

inicializar();
verCarrito();
totalCarrito();
alert('Gracias por visitar Finca Oliva Olivos');


*/
