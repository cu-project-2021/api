const info = () => "Hello"

const allTouristSpots = (parent, args, context, info) => {
    console.log(context.tourists.allSpots())
    return context.tourists.allSpots()
}


module.exports = {
    info,
    allTouristSpots
}