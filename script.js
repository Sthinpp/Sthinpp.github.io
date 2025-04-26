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

