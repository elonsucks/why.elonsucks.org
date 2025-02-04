#!/usr/bin/env node

require('child_process').exec('http-server').stdout.on('data', async data => {
    console.log(data)
    if (data.includes('Starting up http-server')) // preview once (on 1st stdout msg)
        (await import('open')).default(`http://localhost:8080${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
})
