// Generated by CoffeeScript 1.3.3
(function() {
  var foursquare, params;

  require('coffee-script');

  foursquare = (require('./foursquarevenues'))("CLIENT_ID_KEY", "CLIENT_SECRET_KEY");

  params = {
    "ll": "40.7,-74"
  };

  foursquare.getVenues(params, function(error, venues) {
    if (!error) {
      return console.log(venues);
    }
  });

  foursquare.exploreVenues(params, function(error, venues) {
    if (!error) {
      return console.log(venues);
    }
  });

}).call(this);
