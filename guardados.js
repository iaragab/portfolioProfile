const btnChance = document.getElementById("menuExpenBTN")
const body = document.body

const titleDark= document.querySelector(".mod-dark")

const idiomaHtml= document.querySelector(".html")
const idiomaCss= document.querySelector(".css")
const idiomaJs= document.querySelector(".js")
const idiomaSvg= document.querySelector(".svg")



btnChance.addEventListener("click", () => {
    body.classList.toggle("body-dark")
    title.classList.toggle("body-dark")

    idiomaHtml.classList.toggle("html-dark")
    idiomaCss.classList.toggle("css-dark")
    idiomaJs.classList.toggle("js-dark")
    idiomaSvg.classList.toggle("svg-dark")

    if (body.classList.contains("body-dark")) {
        
    }
})

