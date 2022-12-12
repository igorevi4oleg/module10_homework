const button = document.querySelector(".btn");


function checkParams() {

    let windowWidgh = window.screen.width
    let windowHeight = window.screen.height

    alert (`Высота экрана соствляет: ${windowHeight},   Ширина экрана соствляет ${windowWidgh}`)
}


button.addEventListener("click", checkParams)
