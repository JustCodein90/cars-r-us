const database = {
    paintColor: [
        id = 1, color = "Silver", price = ,
        id = 2, color = "Midnight Blue", price = ,
        id = 3, color = "Firebrick Red", price = ,
        id = 4, color = "Spring Green", price = ,
    ],

    interior: [
        id = 1, cloth = "Beige Fabric", price = ,
        id = 2, cloth = "Charcoal Fabric", price = ,
        id = 3, cloth = "White Leather", price = ,
        id = 4, cloth = "Black Leather", price = ,
    ],

    tech: [
        id = 1, package = "Basic Package", price = ,
        id = 2, package = "Navigation Package", price = ,
        id = 3, package = "Visibility Package", price = ,
        id = 4, package = "Ultra Package", price = ,

    ],

    wheels: [
        id = 1, type = "17-inch Pair Radial", price = ,
        id = 2, type = "17-inch Pair Radial Black", price = ,
        id = 3, type = "18-inch Pair Spoke Silver", price = ,
        id = 4, type = "18-inch Pair Spoke Black", price = ,

    ]
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