document.addEventListener("DOMContentLoaded", function () {
  const swiperEstrenos = new Swiper(".swiper-estrenos", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: { slidesPerView: 1.5 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 }
    },
    on: {
      slideChange: function () {
        const btn = document.querySelector('.estreno-boton');
        btn.style.display = this.isEnd ? 'block' : 'none';
      }
    }
  });

  // Inicializar Swiper para las películas recomendadas
  const swiperRecomendadas = new Swiper(".swiper-recomendadas", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: { slidesPerView: 1.5 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 }
    },
    on: {
      slideChange: function () {
        const btn = document.querySelector('.recomendadas-boton');
        btn.style.display = this.isEnd ? 'block' : 'none';
      }
    }

    
  });
});
document.addEventListener("DOMContentLoaded", function () {
 
  const verTrailerBtn = document.querySelector(".btn-sinopsis"); 
  if (verTrailerBtn) {
    verTrailerBtn.addEventListener("click", function () {
      console.log("Botón 'Ver tráiler' clickeado");

      const sinopsis = document.querySelector(".sinopsis");
      sinopsis.style.display = "flex"; 

      const video = document.getElementById("trailerVideo");
      video.currentTime = 0; 
      video.play(); 

      console.log("Video en reproducción"); 
    });
  }

  // Cerrar el modal y pausar el video
  const closeButton = document.querySelector(".close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      console.log("Botón 'Cerrar' clickeado"); 

      const sinopsis = document.querySelector(".sinopsis");
      sinopsis.style.display = "none";

      const video = document.getElementById("trailerVideo");
      video.pause(); 
      video.currentTime = 0;

      console.log("Video pausado y reiniciado"); 
    });
  }


  
  
});

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-peliculas-accion");
  const botonVerMas = document.getElementById("btn-ver-mas-accion");

  const peliculas = [
    { titulo: "Acción 1", imagen: "IMAGENES/pelicula1.jpg" },
    { titulo: "Acción 2", imagen: "IMAGENES/pelicula2.jpg" },
   
  ];

  let cantidadMostrada = 0;
  const cantidadPorCarga = 4;

  function mostrarPeliculas() {
    const fin = Math.min(cantidadMostrada + cantidadPorCarga, peliculas.length);
    for (let i = cantidadMostrada; i < fin; i++) {
      const peli = peliculas[i];
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${peli.imagen}" alt="${peli.titulo}">
        <h3>${peli.titulo}</h3>
      `;
      contenedor.appendChild(div);
    }
    cantidadMostrada = fin;

    if (cantidadMostrada >= peliculas.length) {
      botonVerMas.style.display = "none";
    }
  }

  botonVerMas.addEventListener("click", mostrarPeliculas);
  mostrarPeliculas(); 
});