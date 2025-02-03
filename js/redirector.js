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
    if (location.search.startsWith('?debug')) { // show randURL
        let debugOutput = `<pre>Redirect URL (#${ urls.indexOf(randURL) +1 } of ${urls.length}): `
                        + `<a href="${randURL}" style="color:blue">${randURL}</a></pre>`;
        if (location.search.endsWith('=all')) // append `urls` array
            debugOutput += `<pre>urls = ${JSON.stringify(urls, null, 2)
                .replace(`"${randURL}"`, `<strong style="color:#48b720">"${randURL}"</strong>`)}</pre>`
        document.write(debugOutput)
    } else // redir to randURL
        document.location = randURL

})()
