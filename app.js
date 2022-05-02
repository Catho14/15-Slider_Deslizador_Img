//Declaracion de varaibles
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

//Funcion para slide
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
//Evento boton siguiente
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
//Evento boton anterior
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
//Funcion carrusel: para pasar las imagenes y bloquear su trnasicion al siguiente
function carousel() {
    //Boton siguiente
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  //Boton atras
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  //Recolocacion del elemento
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
//Para que no aparezca el boton de prev a la primera imagen
prevBtn.style.display = "none";

/*
Temas vistos
    querySelectorAll(): Devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
    addEventListener(): Registra un evento a un objeto en específico.
    forEach(): ejecuta la función indicada una vez por cada elemento del array
    sentencias if / else: Sentencias de decision

*/