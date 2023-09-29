const database = {
    paintColor: [

        { id: 1, color: "Silver", price: 200 },
        { id: 2, color: "Midnight Blue", price: 400 },
        { id: 3, color: "Firebrick Red", price: 800 },
        { id: 4, color: "Spring Green", price: 600 }

    ],

    interior: [

        { id: 1, cloth: "Beige Fabric", price: 200 },
        { id: 2, cloth: "Charcoal Fabric", price: 400 },
        { id: 3, cloth: "White Leather", price: 900 },
        { id: 4, cloth: "Black Leather", price: 700 }

    ],

    tech: [

        { id: 1, pack: "Basic Package", price: 1125 },
        { id: 2, pack: "Navigation Package", price: 2500 },
        { id: 3, pack: "Visibility Package", price: 3740 },
        { id: 4, pack: "Ultra Package", price: 5000 }

    ],

    wheels: [

        { id: 1, type: "17-inch Pair Radial", price: 500 },
        { id: 2, type: "17-inch Pair Radial Black", price: 700 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 900 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 1276 }

    ],

    cars: [

        { id: 1, type: "Car", price: 1},
        { id: 2, type: "SUV", price: 1.5},
        { id: 3, type: "Truck", price: 2.5}

    ],

    customOrders:
        [
            {
                id: 1,
                paintColorId: 3,
                interiorId: 4,
                techId: 1,
                wheelsId: 2,
                carsId: 2
            }
        ],

    orderBuilder: {}
}

export const getPaintColors = () => {
    return database.paintColor.map(paintColor => ({ ...paintColor }))
}
export const getInteriors = () => {
    return database.interior.map(interior => ({ ...interior }))
}
export const getTechs = () => {
    return database.tech.map(tech => ({ ...tech }))
}
export const getWheels = () => {
    return database.wheels.map(wheels => ({ ...wheels }))
}
export const getOrders = () => {
    return database.customOrders.map(customOrders => ({ ...customOrders }))
}
export const getCars = () => {
    return database.cars.map(cars => ({ ...cars}))
}



export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}
export const setCars = (id) => {
    database.orderBuilder.carsId = id
}




export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    //newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}