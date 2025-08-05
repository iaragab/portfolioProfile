const body = document.body;
const btnDark = document.getElementById("moon-sun");

//  objetos
const titleRed = document.querySelectorAll(".title-color");
const logoNav = document.getElementById("logo");
const circulos = document.querySelectorAll(".circulo");


// Recuperar configuración guardada
  if (localStorage.getItem("modoSun") === "oscuro") {
    btnDark.classList.add("botonSun");
  }
  if (localStorage.getItem("modoBody") === "activado") {
    body.classList.add("body-dark");
  }
  if (localStorage.getItem("logoDark") === "activado") {
    logoNav.classList.add("logoImgdark");
  }
  if (localStorage.getItem("modoTitle") === "activado") {
    titleRed.forEach(title => title.classList.add("mod-dark"));
  }
  if (localStorage.getItem("modocirculos") === "oscuro") {
    circulos.forEach(title => title.classList.add("cirDark"));
  }



// Función del botón
btnDark.addEventListener("click", () => {
  btnDark.classList.toggle("botonSun");
  body.classList.toggle("body-dark");

  logoNav.classList.toggle("logoImgdark");
  titleRed.forEach(title => title.classList.toggle("mod-dark"));
  circulos.forEach(cir => cir.classList.toggle("cirDark"));




  // Guardar estado en localStorage
  if (btnDark.classList.contains("botonSun")) {
    localStorage.setItem("modoSun", "oscuro");
  } else {
    localStorage.removeItem("modoSun");
  }

  if (body.classList.contains("body-dark")) {
    localStorage.setItem("modoBody", "activado");
  } else {
    localStorage.removeItem("modoBody");
  }

  if (logoNav.classList.contains("logoImgdark")) {
    localStorage.setItem("logoDark", "activado");
  } else {
    localStorage.removeItem("logoDark");}

  const tieneModDark = [...titleRed].some(title =>
    title.classList.contains("mod-dark"));
  if (tieneModDark) {
    localStorage.setItem("modoTitle", "activado");
  } else {
    localStorage.removeItem("modoTitle");}

  const cirModDark = [...circulos].some(cir =>
    cir.classList.contains("cirDark"));
  if (tieneModDark) {
    localStorage.setItem("modocirculos", "oscuros");
  } else {
    localStorage.removeItem("modocirculos");}   


});
