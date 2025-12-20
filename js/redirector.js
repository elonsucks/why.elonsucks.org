(async () => {
    'use strict'
    // recursively extract all URLs from object/array
    const extractUrls = (source) => {
        if (!source) return []

        if (Array.isArray(source)) {
            return source.flatMap(entry =>
                typeof entry === 'string' ?
                entry :
                extractUrls(entry)
            )
        }

        if (typeof source === 'object') {
            if (typeof source.url === 'string') return [source.url]
            return Object.values(source).flatMap(extractUrls)
        }

        return []
    }
    // safely parse JSON from localStorage
    const getStorageJSON = (key, fallback) => {
        try {
            return JSON.parse(localStorage.getItem(key)) ?? fallback
        } catch {
            return fallback
        }
    }
    // save JSON to localStorage
    const setStorageJSON = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    // load URLs
    const rawData = await (await fetch('assets/data/urls.json')).json()

    const urls = {
        all: extractUrls(rawData),
        visited: getStorageJSON('visitedURLs', [])
    }

    urls.unvisited = urls.all.filter(url => !urls.visited.includes(url))
    // reset if all visited
    if (!urls.unvisited.length) {
        urls.unvisited = [...urls.all]
        urls.visited = []
        setStorageJSON('visitedURLs', [])
    }
    // pick a random URL
    const randomIndex = Math.floor(Math.random() * urls.unvisited.length)
    urls.random = urls.unvisited[randomIndex]

    const isDebug = location.search.startsWith('?debug')
    const showAll = location.search.endsWith('=all')

    if (isDebug) {
        let output = `
<pre>
Redirect URL (#${randomIndex + 1} of ${urls.unvisited.length} unvisited):
<strong><a href="${urls.random}">${urls.random}</a></strong>
</pre>
`
        if (showAll) {
            ['unvisited', 'visited'].forEach(type => {
                const numbered = JSON.stringify(urls[type], null, 2)
                    .replace(/"http/g, (match, offset, str) => {
                        const index = (str.slice(0, offset).match(/"http/g) || []).length + 1
                        return `${index}. "${match.slice(1)}`
                    })
                    .replace(
                        new RegExp(`\\d+\\. "${urls.random}"`),
                        '<strong style="color:#48b720">$&</strong>'
                    )

                output += `<pre>urls.${type} = ${numbered}</pre>`
            })
        }

        document.body.innerHTML = output
        return
    }
    // update visited and redirect
    setStorageJSON('visitedURLs', [...urls.visited, urls.random])
    location.href = urls.random
})()
