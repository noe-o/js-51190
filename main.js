let suma = 0;
let total = 0;
compraAceite = () => {
  let prod = prompt(
    'Elige: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
  );
  switch (prod) {
    case '1':
      suma = 800;
      break;
    case '2':
      suma = 1500;
      break;
    case '3':
      suma = 2700;
      break;
    case '4':
      suma = 4800;
      break;
    case '5':
      suma = 9400;
      break;
    default:
      console.log('el dato ingresado es incorrecto');
  }
};
compraCosmetica = () => {
  let prod = prompt(
    'Elige: 1.Jabón de aceite de olive 2.Jabón x 3 3.Jabonera rústica 4.Combo: 4 jabones + jabonera'
  );
  switch (prod) {
    case '1':
      suma = 700;
      break;
    case '2':
      suma = 1900;
      break;
    case '3':
      suma = 2000;
      break;
    case '4':
      suma = 4100;
      break;
    default:
      console.log('el dato ingresado es incorrecto');
  }
};
compraAceituna = () => {
  let prod = prompt('Elige: 1. Aceituna negra 2.Aceituna verde');
  switch (prod) {
    case '1':
      suma = 1900;
      prod = 'Aceituna negra';
      break;
    case '2':
      suma = 1900;
      prod = 'Aceituna verde';
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
  console.log(suma);
  let productos = [prod];
  console.log(productos);
};

let valor = true;
while (valor) {
  let quiere = prompt(
    '¿Quiere comprar algún producto de la finca? Responder: sí/no'
  );
  quiere = quiere.toLowerCase();

  if (quiere == 'si' || quiere == 'sí') {
    compra();
    total = total + suma;
    alert('El total de su compra es de $' + total);
  } else if (quiere == 'no') {
    alert('Puede continuar navegando por nuestra página web');
    valor = false;
  } else alert('Responder: sí/no');
}

ticket = () => {
  const nombre = prompt('Ingrese su nombre');
  const celular = prompt('Ingrese su número de teléfono');
};
