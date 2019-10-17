var _ = require('lodash/get');
var gm = require('gm').subClass({imageMagick:true});
var meta = {
    'Byline[2,80]': 'byline',
    'Image Name[2,5]': 'image_name',
    'Country[2,101]': 'country',
    'Country Code[2,100]': 'country_code',
    'Caption[2,120]': 'caption',
    'Credit[2,110]': 'credit',
    'City[1,90]': 'city',
    'Supplemental Category[2,20]': 'supplemental_category',
    'Keyword[2,25]': 'keywords',
    'Created Date[2,55]': 'created_date',
    'Created Time[2,60]': 'created_time',
    'Copyright String[2,116]': 'copyright'
};

function extract(image) {
    return new Promise(function(resolve, reject) {
        gm(image).identify(function(err, format) {
            if (err) {
                return reject(err);
            }
            var iptc = {};
            var profile = _.get(format, ['Profiles', 'Profile-iptc'], {});
            Object.keys(profile).forEach(function(key) {
                if (meta.hasOwnProperty(key)) {
                    iptc[meta[key]] = profile[key];
                }
            });
            // Fixing bug; We only get one element Keyword if we don't identify it by specific indicator
            gm(image).identify('%[IPTC:2:25]', function(err, keywords) {
                if (err) {
                    return reject(err);
                }
                try {
                    keywords = keywords ? keywords.split(';') : [];
                } catch(e) {
                    console.log(e.stack);
                }
                iptc['keywords'] = keywords;
                resolve(iptc);
            })
        });
    });
}

module.exports = extract;
