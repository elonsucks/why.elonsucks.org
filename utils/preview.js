#!/usr/bin/env node

(async () => {
    const open = (await import('open')).default,
          stopHint = 'Hit CTRL-C to stop the server'

    require('child_process').exec('http-server').stdout.on('data', data => {
        if (data.includes(stopHint)) { // stdout msg when server ready
            data = data.replace('Hit CTRL-C to stop the server', '\nPress CTRL+C to stop server')
            open(`http://localhost:8080${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
        }
        console.log(data)
    })

})()
