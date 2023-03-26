function compra() {
  let suma = 0
  let quiere = prompt(
    '¿Quiere comprar algún producto de la finca? Responder: sí/no');
  quiere = quiere.toLowerCase()
 
  if (quiere == 'si' || quiere == 'sí') {
    let grupo = prompt(
      'Elige uno de los productos de la lista: \n 1. Aceites de oliva virgen extra \n 2.Cosmética \n 3.Aceitunas sin carozo'
    )
    if (grupo == 1) {
      let prod1 = prompt(
        'Elige: \n 1.AOVE 250ml \n 2. AOVE 500ml \n 3.AOVE 1lt \n 4.AOVE 2lt \n 5.AOVE 5lt'
      );
      switch (prod1) {
        case 1:
          let suma = suma + 800;
          break;
        case 2:
          let suma = suma + 1500;
          break;
        case 3:
          let suma = suma + 2700;
          break;
        case 4:
          let suma = suma + 4800;
          break;
        case 5:
          let suma = suma + 9400;
          break;
        default:
          console.log('el dato ingresado es incorrecto');
      }
      /*while seguir{
        prod1 =

      }*/
    } else if (grupo == 2) {
      let prod2 = prompt(
        'Elige: 1.Jabón de aceite de olive 2.Jabón x 3 3.Jabonera rústica 4.Combo: 4 jabones + jabonera'
      );
      switch (prod2) {
        case 1:
          let suma = suma + 800;
          break;
        case 2:
          let suma = suma + 1500;
          break;
        case 3:
          let suma = suma + 2700;
          break;
        case 4:
          let suma = suma + 4800;
          break;
        default:
          console.log('el dato ingresado es incorrecto');
      }
    } else if (grupo == 3) {
      let Prod3 = prompt('Elige: 1. Aceituna negra 2.Aceituna verde');
      switch (prod2) {
        case 1:
          let suma = suma + 800;
          break;
        case 2:
          let suma = suma + 1500;
          break;
      }
    } else alert('No se puso procesar tu respuesta');
  } else if (quiere == no) {
    alert('Puede continuar navegando por nuestra página web');
  } else alert('No se puso procesar tu respuesta');
}
do {
  compra()
} while(quiere=='si');
