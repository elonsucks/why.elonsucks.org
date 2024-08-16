// Randomize number and get the corresponding index for the URL
const gotoURL = urls[Math.floor(Math.random() * urls.length)] // eslint-disable-line

// Perform redirect
if (window.location.search == '?debug') {
    // Display URL instead of redirect
    // if user appends ?debug
    document.write('Redirect URL: ' + gotoURL)
} else {
    // Redirect to random URL
    document.location = gotoURL
}
