const button = document.querySelector(".btn");


function checkParams() {

    let windowWidgh = window.screen.width
    let windowHeight = window.screen.height

    alert (`Высота экрана с учётом полосы прокрутки соствляет: ${windowHeight},   Ширина экрана с учётом полосы прокрутки соствляет ${windowWidgh}`)
}


button.addEventListener("click", checkParams)
