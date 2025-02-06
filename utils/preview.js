#!/usr/bin/env node

(async () => {
    const open = (await import('open')).default

    // Init UI COLORS
    const bw = '\x1b[97m', // bright white
          nc = '\x1b[0m'   // no color

    // PREVIEW page
    const stopHint = 'Hit CTRL-C to stop the server'
    require('child_process').exec('http-server').stdout.on('data', data => {
        if (data.includes(stopHint)) { // stdout msg when server ready
            data = data.replace('Hit CTRL-C to stop the server', `\nPress ${bw}CTRL+C${nc} in terminal to stop server`)
            data += `Press ${bw}CTRL+SHIFT+R${nc} in browser to clear cache (if assets/data/urls.json updated)`
            open(`http://localhost:8080${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
        }
        console.log(data)
    })

})()
