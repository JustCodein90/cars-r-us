import { getOrders, getPaintColors, getInteriors, getWheels, getTechs } from "./database.js"

const paintColors = getPaintColors()
const interiors = getInteriors()
const wheels = getWheels()
const techs = getTechs()


const buildOrderListItem = (order) => {

    const foundPaintColor = paintColors.find(
        (paintColor) => paintColor.id === order.paintColorId
    )
    const foundinterior = interiors.find(
        (interior) => interior.id === order.interiorId
    )
    const foundwheel = wheels.find(
        (wheel) => wheel.id === order.wheelsId
    )
    const foundtech = techs.find(
        (tech) => tech.id === order.techId
    )

    const totalCost = foundPaintColor.price + foundinterior.price + foundwheel.price + foundtech.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<ul>
    Order #${order.id} cost ${costString}
    </ul>`
}


export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}