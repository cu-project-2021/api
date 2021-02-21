const info = () => "Hello"

const allTouristSpots = (parent, args, context, info) => {
    return context.tourists.allSpots()
}

const find = (parent, args, context, info) => {
    if(args.state){
        return context.tourists.allSpots()
    }else if (args.orderBy) {
        return context.tourists.orderByRating(args.orderBy.rating);
    }else {
        return context.tourists.findByState(args.state);
    }

}


module.exports = {
    info,
    allTouristSpots,
    find
}