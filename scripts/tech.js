import { gettech } from "./database";

const techs = gettech()

export const Technologies = () => {
    let html = "<h2>Tecnologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</options>'

    const arrayOfTech = techs.map( (tech) => {
            return `<option value="${tech.id}">${tech.pack}</option>`
        }
    )

    html += arrayOfTech.join("")
    html += "</select>"
    return html
}