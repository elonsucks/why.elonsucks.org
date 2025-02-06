#!/usr/bin/env node

(async () => {

    // Import LIBS
    const open = (await import('open')).default,
          { default: getPort, portNumbers } = await import('get-port')

    // Init UI COLORS
    const bw = '\x1b[97m', // bright white
          nc = '\x1b[0m'   // no color

    // PREVIEW page
    const availPort = await getPort({ port: portNumbers(3000, 3999) }),
          stopHint = 'Hit CTRL-C to stop the server'
    require('child_process').exec(`http-server -p ${availPort}`).stdout.on('data', data => {
        if (data.includes(stopHint)) { // server ready msg, enrich then preview
            data = data.replace(stopHint, `\nPress ${bw}CTRL+C${nc} in terminal to stop server`)
                 + `Press ${bw}CTRL+SHIFT+R${nc} in browser to clear cache (if assets/data/urls.json updated)\n`
            open(`http://localhost:${availPort}${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
        }
        console.log(data) // on new stdout output
    })

})()
