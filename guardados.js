const body = document.body;
const mainChance =document.getElementById("main");
const btnDark = document.getElementById("moon-sun");
const logoNav = document.getElementById("logo");
const headerDark = document.getElementById("dark-header");
const title = document.getElementById("title-chance");
const linkUl = document.querySelectorAll(".a-chance");
const contact = document.getElementById("contact")


// Recuperar configuración guardada
  if (localStorage.getItem("modoBodyDark") === "oscuro") {
    body.classList.add("body-dark");
  }

  if (localStorage.getItem("modoMainDark") === "oscuro") {
    body.classList.add("main-dark");
  }

  if (localStorage.getItem("modoSun") === "activo"){
    btnDark.classList.add("botonSun");
  }
  if (localStorage.getItem("modoTitle") === "activo") {
    title.classList.add("title-black");
  }

  if (localStorage.getItem("modoHeader") === "activo") {
    headerDark.classList.add("headerBlack")
  }

  if (localStorage.getItem("modoLogo") === "activo") {
    logoNav.classList.add("logoImgdark");
  }

  if (localStorage.getItem("modoContact") === "activos") {
      linkUl.forEach(linkA => linkA.classList.add("contact-dark"))
  }

  if (localStorage.getItem("modolinks") === "activos") {
      linkUl.forEach(linkA => linkA.classList.add("linkA"))
  }

// Función del botón

btnDark.addEventListener("click", () => {
   body.classList.toggle("body-dark") 
   mainChance.classList.toggle("imgMain")
    btnDark.classList.toggle("botonSun");
    title.classList.toggle("title-black")
    logoNav.classList.toggle("logoImgdark")
    headerDark.classList.toggle("headerBlack")
    contact.classList.toggle("contact-dark")
    linkUl.forEach(linkA => linkA.classList.toggle("linkA"));


    if (body.classList.contains("body-dark")) {
    localStorage.setItem("modoBodyDark", "oscuro");
    } else {
    localStorage.removeItem("modoBodyDark");
    }

    if (body.classList.contains("imgMain")) {
    localStorage.setItem("modoMainDark", "oscuro");
    } else {
    localStorage.removeItem("modoBodyDark");
    }

    if (btnDark.classList.contains("botonSun")) {
    localStorage.setItem("modoSun", "activo");
  } else {
    localStorage.removeItem("modoSun");
  }

    if (title.classList.contains("title-black")) {
    localStorage.setItem("modoTitle", "activo");
  } else {
    localStorage.removeItem("modoTitle");
  }

    if (title.classList.contains("headerBlack")) {
    localStorage.setItem("modoHeader", "activo");
  } else {
    localStorage.removeItem("modoTitle");
  }

  if (logoNav.classList.contains("logoImgdark")) {
  localStorage.setItem("modoLogo", "activo"); 
  } else {
  localStorage.removeItem("modoLogo");
}

    if (title.classList.contains("contact-dark")) {
    localStorage.setItem("modoContact", "activo");
  } else {
    localStorage.removeItem("modoTitle");
  }

 const chanceLink = [...linkUl].some(linkA =>
    linkA.classList.contains("linkA"));
  if (chanceLink) {
    localStorage.setItem("modolinks", "activos");
  } else {
    localStorage.removeItem("modolinks");}   


});
