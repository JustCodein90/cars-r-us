import { CarHTML } from "./carHtml.js";

const mainContainer = document.querySelector("#container")

const renderALLHTML = () => {
    mainContainer.innerHTML = CarHTML()
}

renderALLHTML()

document.addEventListener("stateChanged", () => {
    console.log("State of data has changed. Regenerating HTML...")
    renderALLHTML()
})