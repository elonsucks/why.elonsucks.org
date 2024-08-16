// Randomize number and get the corresponding index for the URL
const randURL = urls[Math.floor(Math.random() * urls.length)] // eslint-disable-line

// Perform redirect
if (window.location.search == '?debug') // display random URL
    document.write('Redirect URL: ' + randURL)
else // redir to random URL
    document.location = randURL
