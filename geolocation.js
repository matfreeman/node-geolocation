'use strict';

const maps = require('googlemaps');

const defaults = {
    language: 'en',
    region: 'au',
    secure: true
}

function locate(address, key, params = {}) {
    let { region, language, secure } = params;

    return new Promise((resolve, reject) => {
        if (!key) return reject('api key required');
        if (!address) return reject('location required');

        region = region || defaults.region;
        language = language || defaults.language;
        secure = secure || defaults.secure;

        const map = new maps({
            key: key,
            secure: secure
        });

        map.geocode({
            region: region,
            language: language,
            address: address,
            secure: secure
        }, (err, res) => {
            if (err) reject(err);
            if (res.status !== 'OK') {
                reject(res);
            }
            else {
                resolve(res.results[0].geometry.location);
            }
        });
        
    });
}

module.exports.locate = locate;

