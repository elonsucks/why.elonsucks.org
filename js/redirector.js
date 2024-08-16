const randURL = urls[Math.floor(Math.random() * urls.length)] // eslint-disable-line
if (window.location.search == '?debug') // display random URL
    document.write('Redirect URL: ' + randURL)
else // redir to random URL
    document.location = randURL
