var request = require('request');

var data = {
    "to": "+2348108823087",
    "from": "talert",
    "sms": "Hi there, testing Termii",
    "type": "plain",
    "api_key": "TLEwlovPbSOlyoBOzgCtSsciWaUsdbaXPLDDrIidYaMXifRxwuyhsmCMEpqWXH",
    "channel": "generic",
};

var options = {
    'method': 'POST',
    'url': 'https://api.ng.termii.com/api/sms/send', // Correct Termii API endpoint
    'headers': {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});