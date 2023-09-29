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

    return `<p class="orderList">
    ${foundPaintColor.color} car with ${foundwheel.type} wheels, 
    ${foundinterior.cloth} interior, and the ${foundtech.pack} for a total
    cost of ${costString}.
    </p>`
}


export const Orders = () => {
    const orders = getOrders()

    let html = "<div>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</div>"

    return html
}