const info = () => "Hello"

const allTouristSpots = (parent, args, context, info) => {

    return context.tourists.prepareQuery(args)
}

const touristSpot = (parent, args, context, info) => {
    return context.tourists.find(parseInt(args.id));
}


module.exports = {
    info,
    allTouristSpots,
    touristSpot
}