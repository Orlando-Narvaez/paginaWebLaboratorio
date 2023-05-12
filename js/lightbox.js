// Seleccionar elementos del DOM
const hamburguer1 = document.querySelector('.hamburguer');// Seleccionar el elemento con la clase 'hamburguer'
const imagenes = document.querySelectorAll('.img-galeria') // Seleccionar todos los elementos con la clase 'img-galeria'
const imagenesLight = document.querySelector('.agregar-imagen') // Seleccionar el elemento con la clase 'agregar-imagen'
const contenedorLight = document.querySelector('.imagen-light') // Seleccionar el elemento con la clase 'imagen-light'


// Función para mostrar una imagen en el lightbox
const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen; // Establecer la fuente de la imagen en el lightbox
  contenedorLight.classList.toggle('show') // Alternar la clase 'show' en el contenedor del lightbox para mostrar/ocultar
  imagenesLight.classList.toggle('showImage') // Alternar la clase 'showImage' en la imagen del lightbox para mostrar/ocultar
  hamburguer1.style.opacity = '0' // Establecer la opacidad del elemento con la clase 'hamburguer' a 0 para ocultarlo
}

// Añadir un evento de clic a cada imagen de la galería
imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    aparecerImagen(imagen.getAttribute('src')) // Llamar a la función aparecerImagen con la fuente de la imagen clickeada como argumento
  })
})

// Añadir un evento de clic al contenedor del lightbox
contenedorLight.addEventListener('click', e => {
  if (e.target != imagenesLight) {
    contenedorLight.classList.toggle('show') // Alternar la clase 'show' en el contenedor del lightbox para ocultarlo/mostrarlo
    imagenesLight.classList.toggle('showImage') // Alternar la clase 'showImage' en la imagen del lightbox para ocultarlo/mostrarlo
    hamburguer1.style.opacity = '1' // Establecer la opacidad del elemento con la clase 'hamburguer' a 1 para mostrarlo
  }
})

// Función para descargar un archivo
function downloadFile(file) {
  var element = document.createElement('a'); 
  element.download = file; // Establecer el nombre del archivo a descargar
  element.href = '../archivos/' + file; // Establecer la ruta del archivo a descargar

  element.click();
}


// Obtiene los enlaces con los identificadores
var enlaceRedSocial1 = document.getElementById('red-social-1');
var enlaceRedSocial2 = document.getElementById('red-social-2');

// Añadir eventos de clic a los enlaces para redireccionar a URLs externas
enlaceRedSocial1.addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del evento de clic (navegación a otra página)
  window.location.href = 'https://www.facebook.com/orlandonervaez/'; // Redireccionar a la URL de Facebook
});

enlaceRedSocial2.addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del evento de clic (navegación a otra página)
  window.location.href = 'https://www.instagram.com/julian_quiroga_723/'; // Redireccionar a la URL de Instagram
});