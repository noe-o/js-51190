let suma = 0;
let total = 0;
compraAceite = () => {
  let prod = prompt(
    'Elige: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
  );
  switch (prod) {
    case '1':
      suma = 800;
      prod = prod + 'AOVE 250ml';
      break;
    case '2':
      suma = 1500;
      prod = prod + 'AOVE 500ml';
      break;
    case '3':
      suma = 2700;
      prod = prod + 'AOVE 1lt';
      break;
    case '4':
      suma = 4800;
      prod = prod + 'AOVE 2lt';
      break;
    case '5':
      suma = 9400;
      prod = prod + 'AOVE 5lt';
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
      suma = 700;
      prod = prod + ' Jabón de aceite de oliva';
      break;
    case '2':
      suma = 1900;
      prod = prod + ' Jabón x3';
      break;
    case '3':
      suma = 2000;
      prod = prod + ' Jabonera rústica';
      break;
    case '4':
      suma = 4100;
      prod = prod + ' Combo: 4 jabones + jabonera';
      break;
    default:
      console.log('el dato ingresado es incorrecto');
  }
};
compraAceituna = () => {
  let elije = prompt('Elige: 1. Aceituna negra 2.Aceituna verde');
  switch (elije) {
    case '1':
      suma = 1900;
      prod = prod + ' Aceituna negra';
      break;
    case '2':
      suma = 1900;
      prod = ' Aceituna verde';
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
};

let valor = true;
while (valor) {
  let quiere = prompt(
    '¿Quiere comprar algún producto de la finca? Responder: sí/no'
  );
  quiere.toLowerCase();

  if (quiere == 'si' || quiere == 'sí') {
    compra();
    total = total + suma;
    alert('El total de su compra es de $' + total);
  } else if (quiere == 'no') {
    alert('Puede continuar navegando por nuestra página web');
    valor = false;
  } else alert('Responder: sí/no');
}
/*
ticket {
  const nombre = prompt('Ingrese su nombre');
  const celular = prompt('Ingrese su número de teléfono');
  const productos = prod;

};

const tickets[];
tickets.push(ticket)
*/
