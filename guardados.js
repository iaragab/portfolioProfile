const body = document.body;
const btnDark = document.getElementById("moon-sun");
//  objetos
const titleRed = document.querySelectorAll(".title-color");
const logoNav = document.getElementById("logo");

const logoHtml =document.getElementById("html")
const logoCss =document.getElementById("css")
const logoJs =document.getElementById("js")
const logoSvg =document.getElementById("svg")



// Recuperar configuración guardada
if (localStorage.getItem("modoSun") === "oscuro") {
  btnDark.classList.add("botonSun");
}
if (localStorage.getItem("modoBody") === "activado") {
  body.classList.add("body-dark");
}

//  objetos
if (localStorage.getItem("modoTitle") === "activado") {
  titleRed.forEach(title => title.classList.add("mod-dark"));
}
if (localStorage.getItem("logoDark") === "activado") {
  logoNav.classList.add("logoImgdark");
}
if (localStorage.getItem("cirHtml") === "activado") {
  logoHtml.classList.add("logoHtmldarck");
}
if (localStorage.getItem("cirCss") === "activado") {
  logoCss.classList.add("logoCssdarcktml");
}
if (localStorage.getItem("cirJs") === "activado") {
  logoJs.classList.add("logoJsdarck");
}
if (localStorage.getItem("cirSvg") === "activado") {
  logoSvg.classList.add("logoSvgdarck");
}





// Función del botón
btnDark.addEventListener("click", () => {
  btnDark.classList.toggle("botonSun");
  body.classList.toggle("body-dark");

//  objetos
  titleRed.forEach(title => title.classList.toggle("mod-dark"));
  logoNav.classList.toggle("logoImgdark");
  logoHtml.classList.toggle("logoHtmldarck");
  logoCss.classList.toggle("logoCssdarcktml");
  logoJs.classList.toggle("logoJsdarck");
  logoSvg.classList.toggle("logoSvgdarck");


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

  //  objetos
  if (logoNav.classList.contains("logoImgdark")) {
    localStorage.setItem("logoDark", "activado");
  } else {
    localStorage.removeItem("logoDark");
  }

//   circulo
if (logoHtml.classList.contains("logoHtmldarck")) {
  localStorage.setItem("cirHtml", "activado");
} else {
  localStorage.removeItem("cirHtml");
}

if (logoCss.classList.contains("logoCssdarcktml")) {
  localStorage.setItem("cirCss", "activado");
} else {
  localStorage.removeItem("cirCss");
}

if (logoJs.classList.contains("logoJsdarck")) {
  localStorage.setItem("cirJs", "activado");
} else {
  localStorage.removeItem("cirJs");
}

if (logoSvg.classList.contains("logoSvgdarck")) {
  localStorage.setItem("cirSvg", "activado");
} else {
  localStorage.removeItem("cirSvg");
}




});
