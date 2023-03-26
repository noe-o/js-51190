function compra() {
  let grupo = prompt(
    'Elige uno de los productos de la lista: \n 1. Aceites de oliva virgen extra \n 2.Cosmética \n 3.Aceitunas sin carozo'
  );
  if (grupo == 1) {
    let prod1 = prompt(
      'Elige: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
    );
    switch (prod1) {
      case '1':
        return (suma = 800);
        break;
      case '2':
        return (suma = 1500);
        break;
      case '3':
        return (suma = 2700);
        break;
      case '4':
        return (suma = 4800);
        break;
      case '5':
        return (suma = 9400);
        break;
      default:
        console.log('el dato ingresado es incorrecto');
    }
  } else if (grupo == 2) {
    let prod2 = prompt(
      'Elige: 1.Jabón de aceite de olive 2.Jabón x 3 3.Jabonera rústica 4.Combo: 4 jabones + jabonera'
    );
    switch (prod2) {
      case '1':
        return (suma = 700);
        break;
      case '2':
        return (suma = 1900);
        break;
      case '3':
        return (suma = 2000);
        break;
      case '4':
        return (suma = 4100);
        break;
      default:
        console.log('el dato ingresado es incorrecto');
    }
  } else if (grupo == 3) {
    let prod3 = prompt('Elige: 1. Aceituna negra 2.Aceituna verde');
    switch (prod3) {
      case '1':
        return (suma = 1900);
        break;
      case '2':
        return (suma = 1900);
        break;
    }
  } else alert('No se puso procesar tu respuesta');
}

let valor=true;
while (valor){
  let quiere = prompt(
    '¿Quiere comprar algún producto de la finca? Responder: sí/no'
  );
  quiere = quiere.toLowerCase();
  
  if (quiere == 'si' || quiere == 'sí') {
    compra()
    } else if (quiere == 'no') {
      alert('Puede continuar navegando por nuestra página web');
      valor=false;
    } else alert('No se pudo procesar tu respuesta');  
}
