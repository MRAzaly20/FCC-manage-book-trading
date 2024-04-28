var url = require('url');

module.exports = {
    'facebookAuth' : {
        'clientID'      : "xxx", // your App ID
        'clientSecret'  : "xxx", // your App Secret
        'callbackURL'   : url.resolve("xxx",'/auth/facebook/callback')
    },

    'twitterAuth' : {
        'consumerKey'       : "xxx",
        'consumerSecret'    : "xxx",
        'callbackURL'       : url.resolve("xxx",'/auth/twitter/callback')
    },

};
