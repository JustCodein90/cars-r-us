import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheel = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a Wheel</option>'

    const arrayOfWheel = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
    }
    )

    html += arrayOfWheel.join("")
    html += "</select>"
    return html
}