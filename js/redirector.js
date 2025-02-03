(async () => {

    function extractURLs(urlData) {
        const urls = []
        if (Array.isArray(urlData)) // collect string URLs or recurse over objs
            urlData.forEach(item => {
                if (typeof item == 'string' && item.startsWith('http')) urls.push(item)
                else urls.push(...extractURLs(item))
            })
        else if (typeof urlData == 'object') { // collect `url` vals or recurse over objs
            if (urlData.url) urls.push(urlData.url)
            else Object.values(urlData).forEach(value => urls.push(...extractURLs(value)))
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
