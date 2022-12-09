const button = document.querySelector(".btn");


function checkParams() {

    let windowWidgh = window.innerWidth
    let windowHeight = window.innerHeight

    alert (`Высота экрана с учётом полосы прокрутки соствляет: ${windowHeight},   Ширина экрана с учётом полосы прокрутки соствляет ${windowWidgh}`)
}


button.addEventListener("click", checkParams)