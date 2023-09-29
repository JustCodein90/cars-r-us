import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "cloth") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interior = () => {
    let html = "<h2>Interior</h2>"

    html += '<select id="cloth">'
    html += '<option value="0">Select a Interior</option>'

    const arrayOfInterior = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.cloth}</option>`
    }
    )

    html += arrayOfInterior.join("")
    html += "</select>"
    return html
}