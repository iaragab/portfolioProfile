const body = document.body;
const mainChance = document.getElementById("main");
const btn = document.getElementById("moon-sun");
const logoNav = document.getElementById("logo");
const headerDay = document.getElementById("chance-header");
const contact = document.getElementById("contact")


// Recuperar configuración guardada
  if (localStorage.getItem("modoBodyDark") === "day") {
    body.classList.add("body-day");
  }

  if (localStorage.getItem("modoMainday") === "day") {
    mainChance.classList.add("imgMain");
  }

  if (localStorage.getItem("modoMoon") === "activo"){
    btn.classList.add("botonMoon");
  }
  if (localStorage.getItem("modoHeader") === "activo") {
    headerDay.classList.add("headerWhite")
  }

  if (localStorage.getItem("modoLogo") === "activo") {
    logoNav.classList.add("logoImgday");
  }

  if (localStorage.getItem("modoContact") === "activo") {
    contact.classList.add("contact-light");
  }



// Función del botón

btn.addEventListener("click", () => {
   body.classList.toggle("body-day") 
   mainChance.classList.toggle("imgMain")
    btn.classList.toggle("botonMoon");
    logoNav.classList.toggle("logoImgday")
    headerDay.classList.toggle("headerWhite")
    contact.classList.toggle("contact-light")


    if (body.classList.contains("body-day")) {
    localStorage.setItem("modoBodyDark", "day");
    } else {
    localStorage.removeItem("modoBodyDark");
    }

    if (mainChance.classList.contains("imgMain")) {
    localStorage.setItem("modoMainday", "day");
    } else {
    localStorage.removeItem("modoMainday");
    }

    if (btn.classList.contains("botonMoon")) {
    localStorage.setItem("modoMoon", "activo");
  } else {
    localStorage.removeItem("modoSun");
  }

    if (headerDay.classList.contains("headerWhite")) {
    localStorage.setItem("modoHeader", "activo");
  } else {
    localStorage.removeItem("modo");
  }

  if (logoNav.classList.contains("logoImgday")) {
  localStorage.setItem("modoLogo", "activo"); 
  } else {
  localStorage.removeItem("modoLogo");
  }

    if (contact.classList.contains("contact-light")) {
    localStorage.setItem("modoContact", "activo");
  } else {
    localStorage.removeItem("modo");
  }


});


