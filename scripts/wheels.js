import { getwheels, setWheels } from "./database.js";

const wheels = getwheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheelChange") {
            setWheels(parseInt(event.target.value))          
        }  
    }
)

export const Wheel = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a Wheel</option>'

    const arrayOfWheel = wheels.map( (wheel) => {
        return `<option name="wheelChange" value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfWheel.join("")
    html += "</select>"
    return html
}