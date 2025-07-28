// menu 

const btnMenu = document.getElementById("menuExpenBTN")
const ulMenu = document.getElementById("menuUl")


btnMenu.addEventListener("click", function(){
    ulMenu.classList.toggle("show")
})



// galeria

const imagenes = [
    {
        id : 1,
        img : 'img-portafolio/1E64C38D-C90A-4B5C-BC5F-ED20F502D015_1_201_a.jpeg',
    },
    {
        id : 1,
        img : 'img-portafolio/iaragab.github.io_fictional-cafeteria-proyect_events.html.png',
    },
    {
        id : 1,
        img : 'img-portafolio/fondo4.png',
    },
    {
        id : 1,
        img : 'img-portafolio/fondo2.png',
    }
]

// llamadas

const img = document.getElementById("gale-img")

const prevbtn = document.querySelector(".prev-btn")
const newtbtn = document.querySelector(".next-btn")

let currenItem = 0

// funcion

function showImag(index){
    const item = imagenes[index]
    img.src = item.img
}

window.addEventListener('DOMContentLoaded', function () {
    showImag(currenItem)
})

// botones

newtbtn.addEventListener("click", function(){
    currenItem++
    if (currenItem > imagenes.length -1) {
        currenItem = 0
    }
    showImag(currenItem)
})

prevbtn.addEventListener("click", function(){
    currenItem--
    if (currenItem < 0) {
        currenItem = imagenes.length -1
    }
    showImag(currenItem)
})

