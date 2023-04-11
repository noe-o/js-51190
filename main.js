const carrito = [];
let total = 0;
const compraAceite = () => {
  let elije = prompt(
    'Elige: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
  );
  switch (elije) {
    case '1':
      carrito.push({
        valor = 800,
        nombre = 'AOVE 250ml',
        categoria = 'Aceite'
      })
      break;
    case '2':
      carrito.push({
        valor = 1500,
        nombre = 'AOVE 500ml',
        categoria = 'Aceite'
      })
      break;
    case '3':
      carrito.push({
        valor = 2700,
        nombre = 'AOVE 1lt',
        categoria = 'Aceite'
      })
      break;
    case '4':
      carrito.push({
        valor = 4800,
        nombre = 'AOVE 2lt',
        categoria = 'Aceite'
      })
      break;
    case '5':
      carrito.push({
        valor = 9400,
        nombre = 'AOVE 5lt',
        categoria = 'Aceite'
      })
      break;
    default:
      alert('El dato ingresado es incorrecto');
  }
};
const compraCosmetica = () => {
  let elije = prompt(
    'Elige: 1.Jabón de aceite de oliva 2.Jabón x3 3.Jabonera rústica 4.Combo: 4 jabones + jabonera'
  );
  switch (elije) {
    case '1':
      carrito.push({
        valor = 700,
        nombre = 'Jabón de aceite de oliva',
        categoria = 'Cosmética'
      })
      break;
    case '2':
      carrito.push({
        valor = 1900,
        nombre = 'Jabón x3',
        categoria = 'Cosmética'
      })
      break;
    case '3':
      carrito.push({
        valor = 2000,
        nombre = 'Jabonera rústica',
        categoria = 'Cosmética'
      })
      break;
    case '4':
      carrito.push({
        valor = 4100,
        nombre = 'Combo: 4 jabones + jabonera',
        categoria = 'Cosmética'
      })
      break;
    default:
      alert('El dato ingresado es incorrecto');
  }
};
const compraAceituna = () => {
  let elije = prompt('Elige: 1. Aceituna negra 2.Aceituna verde');
  switch (elije) {
    case '1':
      carrito.push({
        valor = 1900,
        nombre = 'Aceituna negra',
        categoria = 'Aceituna'
      })
      break;
    case '2':
      carrito.push({
        valor = 1900,
        nombre = 'Aceituna verde',
        categoria = 'Aceituna'
      })
      break;
    default:
      alert('El dato ingresado es incorrecto');
  }
};
const compra = () => {
  let grupo = prompt(
    'Elige uno de los productos de la lista: \n 1. Aceites de oliva virgen extra \n 2.Cosmética \n 3.Aceitunas sin carozo'
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
      console.log('el dato ingresado es incorrecto');
  }

};
const verCarrito = () => {
  carrito.forEach((producto) => {
    alert('Producto: ' + producto.nombre + ' Precio: $' + producto.valor + ' Categoría: ' + producto.categoria);

  })
}
const total = () => {
  total = carrito.reduce((total, producto) => total + producto.valor, 0)
  alert('El total a pagar es: $' + total);
}
const borrarProducto = () => {
  
}
const inicializar = () => {
  let continuar = confirm('¿Quiere comprar algún producto de la finca?');
  while (continuar) {
    compra();
    verCarrito();
    total();
    continuar = confirm('¿Quiere comprar otro producto de la finca?');
  }
}

alert('Gracias por visitar Finca Oliva Olivos');
