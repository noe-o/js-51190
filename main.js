const carrito = []

compraAceite = () => {
  let elije = prompt(
    'Elige: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
  );
  switch (elije) {
    case '1':
      carrito.push({
        valor = 800,
        producto = 'AOVE 250ml',
        categoría = 'Aceite'
      })
      break;
    case '2':
      carrito.push({
        valor = 1500,
        producto = 'AOVE 500ml',
        categoría = 'Aceite'
      })
      break;
    case '3':
      carrito.push({
        valor = 2700,
        producto = 'AOVE 1lt',
        categoría = 'Aceite'
      })
      break;
    case '4':
      carrito.push({
        valor = 4800,
        producto = 'AOVE 2lt',
        categoría = 'Aceite'
      })
      break;
    case '5':
      carrito.push({
        valor = 9400,
        producto = 'AOVE 5lt',
        categoría = 'Aceite'
      })
      break;
    default:
      console.log('el dato ingresado es incorrecto');
  }
};
compraCosmetica = () => {
  let elije = prompt(
    'Elige: 1.Jabón de aceite de oliva 2.Jabón x3 3.Jabonera rústica 4.Combo: 4 jabones + jabonera'
  );
  switch (elije) {
    case '1':
    carrito.push({
      valor = 700,
      producto = 'Jabón de aceite de oliva',
      categoría = 'Cosmética'
    })
      break;
    case '2':
    carrito.push({
      valor = 1900,
      producto = 'Jabón x3',
      categoría = 'Cosmética'
    })
      break;
    case '3':
    carrito.push({
      valor = 2000,
      producto = 'Jabonera rústica',
      categoría = 'Cosmética'
    })
      break;
    case '4':
    carrito.push({
      valor = 4100,
      producto = 'Combo: 4 jabones + jabonera',
      categoría = 'Cosmética'
    })
      break;
    default:
      console.log('el dato ingresado es incorrecto');
  }
};
compraAceituna = () => {
  let elije = prompt('Elige: 1. Aceituna negra 2.Aceituna verde');
  switch (elije) {
    case '1':
    carrito.push({
      valor = 1900,
      producto = 'Aceituna negra',
      categoría = 'Aceituna'
    })
      break;
    case '2':
    carrito.push({
      valor = 1900,
      producto = 'Aceituna verde',
      categoría = 'Aceituna'
    })
      break;
    default:
      console.log('el dato ingresado es incorrecto');
  }
};
compra = () => {
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

}

do {
  let quiere = prompt(
    '¿Quiere comprar algún producto de la finca? Responder: sí/no'
  );
  quiere.toLowerCase();

  if (quiere == 'si' || quiere == 'sí') {
    compra();
    total = total + suma;
    alert('El total de su compra es de $' + total);
    continuar = confirm('¿Quiere comprar otro producto de la finca?');
  } else if (quiere == 'no') {
    alert('Puede continuar navegando por nuestra página web');
    continuar = false;
  }
} while (continuar);
