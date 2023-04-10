let suma = 0;
let total = 0;
compraAceite = () => {
  let elije = prompt(
    'Elige: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
  );
  switch (elije) {
    case '1':
      suma = 800;
      prod = 'AOVE 250ml';
      break;
    case '2':
      suma = 1500;
      prod = 'AOVE 500ml';
      break;
    case '3':
      suma = 2700;
      prod = 'AOVE 1lt';
      break;
    case '4':
      suma = 4800;
      prod = 'AOVE 2lt';
      break;
    case '5':
      suma = 9400;
      prod = 'AOVE 5lt';
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
      prod = 'Jabón de aceite de oliva';
      break;
    case '2':
      suma = 1900;
      prod = 'Jabón x3';
      break;
    case '3':
      suma = 2000;
      prod = 'Jabonera rústica';
      break;
    case '4':
      suma = 4100;
      prod = 'Combo: 4 jabones + jabonera';
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
  const productos = [];
  productos.push(prod);
  console.log(productos);
  class ticket {
    constructor(nombre, celular, productos) {
      (this.nombre = prompt('Ingrese su nombre')),
        (this.celular = prompt('Ingrese su número de teléfono')),
        this.productos;
    }
  }

  const tickets = [
    {
      nombre: 'Norma',
      celular: '234667788',
      productos: 'noquieroaceite',
    },
  ];
  tickets.push(ticket);
  alert(tickets);
};

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
