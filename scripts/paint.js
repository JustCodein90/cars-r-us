import { getPaintColors } from "./database";

const paintColors = getPaintColors();

export const paint = () => {
    let html = "<h2>Paint Color</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select Paint Color</option>'

    const arrayofColors = paintColors.map( (paintColor) => {
            return `<option value="${paintColor.id}">${paintColor.color}</option>`
        }
    )

    html += arrayofColors.join("")
    html += "</select>"
    return html
}