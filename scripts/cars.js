import { getCars, setCars } from "./database.js"

const cars = getCars()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "car") {
            setCars(parseInt(event.target.value))
        }
    }
)


export const Cars = () => {
    let html = "<form class = 'radioCar'>"

    for (const car of cars) {
        html += `<label>
        <input type="radio"  name="car" value="${car.id}"> ${car.type} </label>`
    }
    
    html += "</form>"
    return html
}