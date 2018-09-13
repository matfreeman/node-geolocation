# node-geolocation
A script for pulling geolocation information from the google maps API.

# usage
```
const geo = require('./geolocation.js');

await geo.locate('Flinders St, Melbourne VIC 3000', {
  secure: true, // optional: default is secure
  language: 'en', // optional: language
  region: 'au' // optional: region
})
```
