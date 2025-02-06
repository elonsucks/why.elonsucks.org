#!/usr/bin/env node

(async () => {

    // Import LIBS
    const { default: getPort, portNumbers } = await import('get-port'),
          open = (await import('open')).default

    // Init UI COLORS
    const bw = '\x1b[97m', // bright white
          by = '\x1b[93m', // bright yellow
          nc = '\x1b[0m'   // no color

    // PREVIEW page
    const availPort = await getPort({ port: portNumbers(3000, 3999) }), reAccessInfo = /Available on:[\s\S]+/
    require('child_process').exec(`http-server -p ${availPort}`).stdout.on('data', data => {
        if (reAccessInfo.test(data)) { // server ready msg, enrich then preview
            data = data.replace(reAccessInfo, `Listening at ${by}http://localhost:${availPort}${nc}\n\n`)
                 + `Press ${bw}CTRL+C${nc} in terminal to stop server\n`
                 + `Press ${bw}CTRL+SHIFT+R${nc} in browser to clear cache (if assets/data/urls.json updated)\n`
            open(`http://localhost:${availPort}${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
        }
        console.log(data) // on new stdout output
    })

})()
