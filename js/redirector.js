// Count the number of URLs in list.
var groups = redirectURLs.urls.length;

// Randomize number and get the corresponding index for the URL
var gotoUrl = redirectURLs.urls[Math.floor((Math.random() * groups))].url

// Perform redirect
if (window.location.search == "?debug") {
	// Display URL instead of redirect
	// if user appends ?debug
	document.write("Redirect URL: " + gotoUrl);  
} else {
	// Redirect to random URL
	document.location = gotoUrl;
}