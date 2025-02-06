#!/usr/bin/env node

(async () => {

    // Import LIBS
    const { default: getPort, portNumbers } = await import('get-port'), // for availPort
          spawn = require('cross-spawn'), // to preserve cmd prompt
          open = (await import('open')).default // for preview in exec().stdout.on()

    // Init UI COLORS
    const bw = '\x1b[97m', // bright white
          by = '\x1b[93m', // bright yellow
          nc = '\x1b[0m'   // no color

    // Init STDOUT vars
    const availPort = await getPort({ port: portNumbers(3000, 3999) })
    const reAccessInfo = /Available on:[\s\S]+/
    const enrichedAccessInfo = `Listening at ${by}http://localhost:${availPort}${nc}\n\n`
        + `Press ${bw}CTRL+C${nc} in terminal to stop server\n`
        + `Press ${bw}CTRL+SHIFT+R${nc} in browser to clear cache (if assets/data/urls.json updated)\n`

    if (!process.argv.includes('--recursing')) // spawn new terminal from OG one
        return spawn(`node ${__filename} --recursing`, { shell: true, detached: true, stdio: 'ignore' })
            .on('error', err => console.error(`Failed to open new terminal: ${err.message}`))
            .unref() // detach process to allow immediate return to cmd prompt

    // PREVIEW page
    require('child_process').exec(`http-server -p ${availPort}`).stdout.on('data', data => {
        if (reAccessInfo.test(data)) { // server ready msg, enrich then preview site
            data = data.replace(reAccessInfo, enrichedAccessInfo)
            open(`http://localhost:${availPort}${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
        }
        console.log(data) // on each stdout output
    })

})()
