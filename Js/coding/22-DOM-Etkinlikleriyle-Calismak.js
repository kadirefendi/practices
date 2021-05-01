// DOM Etkinlikleriyle Çalışmak
// https://www.w3schools.com/jsref/dom_obj_event.asp 
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick)


function domClick() {
    console.log("tıklandı")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}