function compra() {
  let quiere = prompt(
    '¿Quiere comprar algún producto de la finca? Responder: sí/no');
    quiere=toLowercase(quiere);

  if (quiere == 'si'||quiere == 'sí') {
    let elige=prompt('Elije uno de los productos de la lista: 1. Aceites de oliva virgen extra');
    if (elige==1 || elige==2)
    let otro = prompt('¿Desea elegir otro producto? Responder: sí/no');
    if (otro == 'no') {
      alert('Ok, nos veremos la próxima');
    } else if (otro != 'no' && otro != 'si') {
      alert('No pudimos procesar su respuesta');
    }
  } else if (quiere == 'no') {
    alert('Ok, nos veremos la próxima');

  } else {
    alert('No pudimos procesar su respuesta');

  }
}
compra();