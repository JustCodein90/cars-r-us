const database = {
    paintColor: [
        {
        id: 1, color: "Silver", price: 200,
        id: 2, color: "Midnight Blue", price: 400,
        id: 3, color: "Firebrick Red", price: 800,
        id: 4, color: "Spring Green", price: 600,
        }
    ],

    interior: [
        {
        id: 1, cloth: "Beige Fabric", price: 200,
        id: 2, cloth: "Charcoal Fabric", price: 400,
        id: 3, cloth: "White Leather", price: 900,
        id: 4, cloth: "Black Leather", price: 700,
        }
    ],

    tech: [
        {
        id: 1, pack: "Basic Package", price: 1125,
        id: 2, pack: "Navigation Package", price: 2500,
        id: 3, pack: "Visibility Package", price: 3740,
        id: 4, pack: "Ultra Package", price: 5000,
        }
    ],

    wheels: [
        {
        id: 1, type: "17-inch Pair Radial", price: 500,
        id: 2, type: "17-inch Pair Radial Black", price: 700,
        id: 3, type: "18-inch Pair Spoke Silver", price: 900,
        id: 4, type: "18-inch Pair Spoke Black", price: 1276,
        }
    ],
    orderBuilder: {}
}

export const getPaintColors = () => {
    return database.paintColor.map(paintColor => ({...paintColor}))
}
export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}
export const gettech = () => {
    return database.tech.map(tech => ({...tech}))
}
export const getwheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}