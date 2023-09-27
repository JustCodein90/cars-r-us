import { getwheels } from "./database";

const wheels = getwheels()

export const Wheels = () => {
    let html = "<h2>Wheels</h2"

    html += '<select id="wheel">'
    html += '<option value="0">Select wheel</option>'

    const arrayOfWheels = wheels.map( (wheel) => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfWheels.join("")
    html += "</select>"
    return html
}