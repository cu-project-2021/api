const info = () => "Hello"

const allTouristSpots = (parent, args, context, info) => {
    return context.tourists.allSpots()
}


module.exports = {
    info,
    allTouristSpots
}