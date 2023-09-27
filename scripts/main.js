import { CarHTML } from "./carHtml.js";

const mainContainer = document.querySelector("#container")

const renderALLHTML = () => {
    mainContainer.innerHTML = CarHTML()
}

renderALLHTML()