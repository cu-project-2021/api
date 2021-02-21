const fs = require('fs');
const path = require('path');
const _ = require('lodash');

class TouristSpots {
    constructor() {
        this.spots = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
    }

    allSpots(){
        return this.spots
    }

    findByState(state){
        return _.filter(this.spots, o => {
            return o.state === state
        })
    }
    orderByRating(type) {
        return _.orderBy(this.spots, ['rating'], [type])
    }
}


const touristSpots = new TouristSpots();

module.exports = touristSpots;