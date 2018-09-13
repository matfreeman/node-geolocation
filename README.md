# node-geolocation
A script for pulling geolocation information from the google maps API.

# install
```
npm install
```

# usage
```
const geo = require('./geolocation.js');

geo.locate('Flinders St, Melbourne VIC 3000', 'GOOGLE-MAPS-API-ACCESS-KEY', {
  secure: true, // optional: default is secure
  language: 'en', // optional: language
  region: 'au' // optional: region
}).then((location) => {
    location == { lat: -37.8186627, lng: 144.9630137 };
})
```
