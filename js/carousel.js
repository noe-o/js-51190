const verCarousel = async () => {
  try {
    const res = await fetch('../carousel.json');
    const items = await res.json();
    const carrousel = document.querySelector('#carousel');
    items.forEach((item) => {
      const carrouselItem = document.createElement('div');
      carrouselItem.className = `carousel-item ${item.clases}`;
      carrouselItem.innerHTML = `
              <div class="carousel-caption d-none d-md-block">
                  <h5>${item.nombre}</h5>
                  <p>${item.detalle}</p>
              </div>
          `;
      carrousel.append(carrouselItem);
    });
  } catch (error) {
    console.log(error);
  }
};
verCarousel();
