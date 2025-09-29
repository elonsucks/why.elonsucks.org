(async () => {

    function extractURLs(obj) {
        const urls = []
        if (Array.isArray(obj)) // contains URLs
            for (const entry of obj) {
                if (typeof entry == 'string') urls.push(entry) // push string URL
                else urls.push(...extractURLs(entry)) // recurse once to push entry.url
            }
        else { // contains `url` key or needs further recursion
            if (obj.url) urls.push(obj.url) // push found obj.url's val
            else for (const val of Object.values(obj)) urls.push(...extractURLs(val)) // recurse until array reached
        }
        return urls
    }

    // Init URLs
    const urls = {
        all: extractURLs(await (await fetch('assets/data/urls.json')).json()),
        visited: JSON.parse(localStorage.visitedURLs || '[]')
    } ; urls.unvisited = urls.all.filter(url => !urls.visited.includes(url))
    if (!urls.unvisited.length) { // no unvisited URLs remain...
        urls.unvisited.push(...urls.all) // ...so populate w/ urls.all
        urls.visited.length = 0 // + clear urls.visited from memory
        localStorage.visitedURLs = '[]' // + storage
    }
    urls.random = urls.unvisited[Math.floor(Math.random() * urls.unvisited.length)]

    // Show or redir to urls.random
    if (location.search.startsWith('?debug')) { // show urls.random
        let debugOutput = `<pre>Redirect URL (#${
            urls.unvisited.indexOf(urls.random) +1 } of ${urls.unvisited.length} unvisited):\n`
                        + `<strong><a href="${urls.random}">${urls.random}</a></strong></pre>`
        if (location.search.endsWith('=all')) // append numbered urls.<unvisited|visited>
            ['unvisited', 'visited'].forEach(urlsType => {
                const numberedURLs = JSON.stringify(urls[urlsType], undefined, 2)
                    .replace(/"http/g, (match, offset, string) => {
                        const urlIdx = (string.slice(0, offset).match(/"http/g) || []).length +1
                        return `${urlIdx}. "${match.slice(1)}`
                    })
                debugOutput += `<pre>urls.${urlsType} = ${numberedURLs.replace(new RegExp(`\\d+\\. "${urls.random}"`),
                    `<strong style="color: #48b720">$&</strong>`)}</pre>`
            })
        document.body.innerHTML = debugOutput
    } else { // redir to urls.random
        localStorage.visitedURLs = JSON.stringify([...urls.visited, urls.random])
        document.location = urls.random
    }

})()
