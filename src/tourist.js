const fs = require('fs');
const path = require('path');

class TouristSpots {
    constructor() {
        this.spots = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
    }

    allSpots(){
        return this.spots
    }
}


const touristSpots = new TouristSpots();

module.exports = touristSpots;