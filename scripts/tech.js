import { getTechs, setTech } from "./database.js";

const techs = getTechs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</options>'

    const arrayOfTech = techs.map((tech) => {
        return `<option value="${tech.id}">${tech.pack}</option>`
    }
    )

    html += arrayOfTech.join("")
    html += "</select>"
    return html
}
