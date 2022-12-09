const wsUrl = "wss://echo-ws-service.herokuapp.com";

const resultDiv = document.querySelector(".chat-window");
const sendMessegeBtn = document.querySelector(".send-messege-button");
const sendGeoBtn = document.querySelector(".send-geo-button");
const input = document.querySelector(".input");


let websocket;


document.addEventListener("DOMContentLoaded", () => {

    const date = new Date().toLocaleTimeString();
    websocket = new WebSocket(wsUrl);
    websocket.onopen = function() {
    writeMessege(`<span style="color: gold;">(${date}) Добро пожаловать в чат!</span>`)
  };
    websocket.onmessage = function(evt) {
        const date = new Date().toLocaleTimeString();
        writeMessege(
        `<span style="color: gold;">(${date}) Сервер: ` + evt.data+'</span>'
        );
    };
    websocket.onerror = function(evt) {
        writeMessege(
        '<span style="color: red;">ERROR:</span> ' + evt.data
        );
  };
})


function writeMessege (message, isRecieved){

    
    let pre = document.createElement("div");
    if(isRecieved == false) {
        pre.classList.add("messege-div");
    } else {
    pre.classList.add("messege-div-response")};
    pre.innerHTML = `<span>${message}</span>`;
    resultDiv.appendChild(pre);
    resultDiv.scrollTop = resultDiv.scrollHeight

}


function sendMessege() {

    const date = new Date().toLocaleTimeString();
    if(input.value === '') return;
    const message = input.value;
    writeMessege(`(${date}) Вы: ` + message, false);
    websocket.send(message);
    ;

}

function sendGeo() {
    const date = new Date().toLocaleTimeString();    
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(coords.latitude, coords.longitude);
          message = `(${date}) <a style = "color: white" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_ blank">Ссылка на карту</a>`;
          writeMessege(message, false);
        });
}
}







sendMessegeBtn.addEventListener("click", sendMessege)


sendGeoBtn.addEventListener("click", sendGeo)


    




