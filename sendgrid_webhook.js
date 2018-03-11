//replacement for: "webhook": "lt -p 5000 -s liajdsfecofeefee"

var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: "liajdsfecofeefee" }, function(err, tunnel) {
  console.log('LT running')
});