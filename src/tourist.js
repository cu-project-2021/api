const fs = require('fs');
const path = require('path');
const _ = require('lodash');

class TouristSpots {
    constructor() {
        this.spots = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
    }

    allSpots() {
        return this.spots
    }

    prepareQuery(args) {
        let res = [];
        if (Object.keys(args).length === 0) {
            res = this.spots;
        }
        if (Object.keys(args).includes("filter")) {
            if (Object.keys(args.filter).includes("state")) {
                if (res.length === 0) {
                    res = _.filter(this.spots, o => {
                        return o.state === args.filter.state;
                    })
                } else {
                    res = _.filter(res, o => {
                        return o.state === args.filter.state;
                    })
                }
            }

            if (Object.keys(args.filter).includes("type")) {
                if (res.length === 0) {
                    res = _.filter(this.spots, o => {
                        if (o.type.includes(args.filter.type)) {
                            return o;
                        }
                    })
                } else {
                    res = _.filter(res, o => {
                        if (o.type.includes(args.filter.type)) {
                            return o;
                        }
                    })
                }
            }
        }

        if (Object.keys(args).includes("order")) {
            if (res.length === 0) {
                res = _.orderBy(this.spots, ['rating'], args.order.rating);
            } else {
                res = _.orderBy(res, ['rating', args.order.rating]);
            }
        }

        return res;
    }

    find(id) {
        return _.find(this.spots, o => o.id === id)
    }
}


const touristSpots = new TouristSpots();

module.exports = touristSpots;