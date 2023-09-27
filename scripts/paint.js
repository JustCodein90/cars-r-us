import { getPaintColors, setPaintColor } from "./database.js";

const paintColors = getPaintColors();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintChange") {
            setPaintColor(parseInt(event.target.value))         
        }  
    }
)

export const Paint = () => {
    let html = "<h2>Paint Color</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select Paint Color</option>'

    const arrayofColors = paintColors.map( (paintColor) => {
            return `<option name="paintChange value="${paintColor.id}">
            ${paintColor.color}</option>`
        }
    )

    html += arrayofColors.join(" ")
    html += "</select>"
    return html
}