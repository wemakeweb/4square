# Foursquare Venues API #
  
This is a simple module to access 4squares' venue API.  

`npm install foursquarevenues`

## Example ##

`foursquare = (require('./foursquarevenues'))("CLIENTIDKEY", "CLIENTSECRETKEY");  
  
params = {  
	"ll": "40.7,-74"  
};  

foursquare.getVenues(params, function(error, venues) {  
	if (!error) {  
  		console.log(venues);  
	}  
});  

foursquare.exploreVenues(params, function(error, venues) {  
	if (!error) {  
  		console.log(venues);  
	}  
});  `

**Enjoy the usage. You can email me at yamil.asusta@upr.edu for any bugs.**

