const verProductos = async () => {
  const contenedorProductos = document.querySelector('#contenedorProductos');
  try {
    const resp = await fetch('./productos.json');
    const produtos = await resp.json();
    produtos.forEach((producto) => {
      const tarjetaProducto = document.createElement('div');
      tarjetaProducto.className = 'producto';
      tarjetaProducto.innerHTML = `<h3>${producto.nombre}</h3>`;
      contenedorProductos.append(tarjetaProducto);
    });
  } catch (error) {}
};
verProductos();
