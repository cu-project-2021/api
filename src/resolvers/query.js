const info = () => "Hello"

const allTouristSpots = (parent, args, context, info) => {
    return context.tourists.allSpots()
}

const find = (parent, args, context, info) => {
    if(!args.state){
        return context.tourists.allSpots()
    }
    return context.tourists.findByState(args.state);
}


module.exports = {
    info,
    allTouristSpots,
    find
}