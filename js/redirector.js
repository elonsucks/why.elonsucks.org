(async () => {

    function extractURLs(urlData) {
        const urls = []
        if (Array.isArray(urlData)) // contains URLs
            urlData.forEach(entry => {
                if (typeof entry == 'string') urls.push(entry) // push string URL
                else urls.push(...extractURLs(entry)) // recurse to push entry.url
            })
        else { // contains `url` key or needs further recursion
            if (urlData.url) urls.push(urlData.url) // push found `url` key's val
            else Object.values(urlData).forEach(value => urls.push(...extractURLs(value))) // recurse to reach arrays
        }
        return urls
    }

    const urls = extractURLs(await (await fetch('assets/data/urls.json')).json()),
          randURL = urls[Math.floor(Math.random() * urls.length)]

    if (location.search == '?debug') // display randURL
        document.write(`Redirect URL: ${randURL}`)
    else // redir to randURL
        document.location = randURL

})()
