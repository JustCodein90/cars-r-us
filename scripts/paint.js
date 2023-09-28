import { getPaintColors, setPaintColor } from "./database.js";

const paintColors = getPaintColors();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const Paint = () => {
    let html = "<h2>Paint Color</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select Paint Color</option>'

    const arrayofColors = paintColors.map((paintColor) => {
        return `<option value="${paintColor.id}">
            ${paintColor.color}</option>`
    }
    )

    html += arrayofColors.join(" ")
    html += "</select>"
    return html
}