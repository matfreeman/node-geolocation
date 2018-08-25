let GoogleMapsAPI = require("googlemaps");
let table = require('table').table;

const API_KEY = 'YOUR_API_KEY_HERE'
const DELAY_TIME = 100;
const REGION = 'au';
const LANGUAGE = 'en';

// example locations
const locations = [
    {
        name: 'Flinders Street Station',
        address: 'Flinders Railway Station Street Station, Melbourne VIC 3000'
    },
    {
        name: 'Sydney Opera House',
        address: 'Sydney Opera House, Bennelong Point, Sydney NSW 2000'
    }
]

const publicConfig = {
  key: API_KEY,
  secure: true 
};
var mapsApi = new GoogleMapsAPI(publicConfig);

async function getGeolocation(address) {
    return new Promise((resolve, reject) => { 
        let params = {
            address: address,
            language: LANGUAGE,
            region: REGION
        }
        mapsApi.geocode(params, (err, res) => {
            if (err) reject(err);
            if (res.status !== 'OK') {
                reject(res);
            }
            else {
                resolve(res.results[0].geometry.location);
            }
        })
    });
}

async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function run() {
    try {
        let coords = [['Name', 'Latitude', 'Longitude']];
        for (let location of locations) {
            await timeout(DELAY_TIME);
            let geoloc = await getGeolocation(location.address);
            coords.push([location.name, geoloc.lat, geoloc.lng]);
        }
        console.log(table(coords));
    } catch (err) {
        console.log(err);
    }
})();
