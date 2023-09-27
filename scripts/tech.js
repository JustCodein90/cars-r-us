import { gettech, setTech } from "./database.js";

const techs = gettech()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "techChange") {
            setTech(parseInt(event.target.value))          
        }   
    }
)

export const Technologies = () => {
    let html = "<h2>Tecnologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</options>'

    const arrayOfTech = techs.map( (tech) => {
            return `<option name="techChange" value="${tech.id}">${tech.pack}</option>`
        }
    )

    html += arrayOfTech.join("")
    html += "</select>"
    return html
}
