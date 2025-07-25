const body = document.body;
const btnDark = document.getElementById("moon-sun");

const titleRed = document.querySelectorAll(".title-color");
const logoNav = document.getElementById("logo");
const elementos = document.querySelectorAll(".circulo-idioma");

// Recuperar configuración guardada
if (localStorage.getItem("modoSun") === "oscuro") {
  btnDark.classList.add("botonSun");
}
if (localStorage.getItem("modoBody") === "activado") {
  body.classList.add("body-dark");
}
if (localStorage.getItem("modoTitle") === "activado") {
  titleRed.forEach(title => title.classList.add("mod-dark"));
}
if (localStorage.getItem("logoDark") === "activado") {
  logoNav.classList.add("logoImgdark");
}
if (localStorage.getItem("elementosDark") === "activado") {
elementos.forEach(circle => circle.classList.add("idioma-dark"));
}

// Función del botón
btnDark.addEventListener("click", () => {
  btnDark.classList.toggle("botonSun");
  body.classList.toggle("body-dark");
  titleRed.forEach(title => title.classList.toggle("mod-dark"));
  logoNav.classList.toggle("logoImgdark");
    elementos.forEach(circle => circle.classList.toggle("idioma-dark"));

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

  const tieneModDark = [...titleRed].some(title =>
    title.classList.contains("mod-dark"));
  if (tieneModDark) {
    localStorage.setItem("modoTitle", "activado");
  } else {
    localStorage.removeItem("modoTitle");
  }

  if (logoNav.classList.contains("logoImgdark")) {
    localStorage.setItem("logoDark", "activado");
  } else {
    localStorage.removeItem("logoDark");
  }

  const tieneIdiomaDark = [...elementos].some(el =>
    el.classList.contains("idioma-dark"));
  if (tieneIdiomaDark) {
    localStorage.setItem("elementosDark", "activado");
  } else {
    localStorage.removeItem("elementosDark");
  }
});
