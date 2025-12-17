(async () => {
    'use strict'
    /**
     * recursively extracts all url strings from a nested object/array structure
     * @param {any} source
     * @returns {string[]}
     */
    const extractUrls = (source) => {
        if (!source) return []

        if (Array.isArray(source)) {
            return source.flatMap(entry =>
                typeof entry === 'string'
                    ? entry
                    : extractUrls(entry)
            )
        }

        if (typeof source === 'object') {
            if (typeof source.url === 'string') return [source.url]
            return Object.values(source).flatMap(extractUrls)
        }

        return []
    }
    /**
     * safely parses json from localstorage
     * @param {string} key
     * @param {any} fallback
     */
    const getStorageJSON = (key, fallback) => {
        try {
            return JSON.parse(localStorage.getItem(key)) ?? fallback
        } catch {
            return fallback
        }
    }
    /**
     * saves json data to localstorage
     * @param {string} key
     * @param {any} value
     */
    const setStorageJSON = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const response = await fetch('assets/data/urls.json')
    const rawData  = await response.json()

    const urls = {
        all: extractUrls(rawData),
        visited: getStorageJSON('visitedURLs', [])
    }

    urls.unvisited = urls.all.filter(
        url => !urls.visited.includes(url)
    )

    if (urls.unvisited.length === 0) {
        urls.unvisited = [...urls.all]
        urls.visited   = []
        setStorageJSON('visitedURLs', [])
    }

    const randomIndex = Math.floor(Math.random() * urls.unvisited.length)
    urls.random = urls.unvisited[randomIndex]

    const isDebug = location.search.startsWith('?debug')
    const showAll = location.search.endsWith('=all')

    if (isDebug) {
        let output = `
    <pre>
    Redirect URL (#${randomIndex + 1} of ${urls.unvisited.length} unvisited):
    <strong><a href="${urls.random}">${urls.random}</a></strong>
    </pre>`
        if (showAll) {
            ['unvisited', 'visited'].forEach(type => {
                const numbered = JSON.stringify(urls[type], null, 2)
                    .replace(/"http/g, (match, offset, str) => {
                        const index =
                            (str.slice(0, offset).match(/"http/g) || []).length + 1
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

    setStorageJSON('visitedURLs', [...urls.visited, urls.random])
    location.href = urls.random

})()
