// Randomize number and get the corresponding index for the URL
const gotoUrl = urls[Math.floor((Math.random() * urls.length))].url

// Perform redirect
if (window.location.search == "?debug") {
    // Display URL instead of redirect
    // if user appends ?debug
    document.write("Redirect URL: " + gotoUrl)
} else {
    // Redirect to random URL
    document.location = gotoUrl
}
