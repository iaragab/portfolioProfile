const body = document.body;
const btnDark = document.getElementById("moon-sun");
const titleRed = document.querySelectorAll(".title-color");
const logoNav = document.getElementById("logo");
const circulos = document.querySelectorAll(".circulo");


// Recuperar configuración guardada
  if (localStorage.getItem("modoSun") === "oscuro") {
    btnDark.classList.add("botonSun");
}



// Función del botón

btnDark.addEventListener("click", () => {
  btnDark.classList.toggle("botonSun");
  circulos.forEach(cir => cir.classList.toggle("cirDark"));




  // Guardar estado en localStorage
  if (btnDark.classList.contains("botonSun")) {
    localStorage.setItem("modoSun", "oscuro");
  } else {
    localStorage.removeItem("modoSun");
  }

  const cirModDark = [...circulos].some(cir =>
    cir.classList.contains("cirDark"));
  if (tieneModDark) {
    localStorage.setItem("modocirculos", "oscuros");
  } else {
    localStorage.removeItem("modocirculos");}   


});
