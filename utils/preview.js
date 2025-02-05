#!/usr/bin/env node

(async () => {
    const open = (await import('open')).default

    require('child_process').exec('http-server').stdout.on('data', data => {
        console.log(data)
        if (data.startsWith('Starting up http-server')) // preview once (on 1st stdout msg)
            open(`http://localhost:8080${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
    })

})()
