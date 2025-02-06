#!/usr/bin/env node

(async () => {

    // Import LIBS
    const os = require('os'), // for init cmds
          { default: getPort, portNumbers } = await import('get-port'), // for availPort
          open = (await import('open')).default // for preview in exec().stdout.on()

    // Init UI COLORS
    const bw = '\x1b[97m', // bright white
          by = '\x1b[93m', // bright yellow
          nc = '\x1b[0m'   // no color

    // Init CMDS
    const cmds = { node: `node ${__filename} --recursing` }
    cmds.spawn = os.platform() == 'darwin' ? `osascript -e 'tell app "Terminal" to do script "${cmds.node}"'`
               : os.platform() == 'win32'  ? `start cmd /k "${cmds.node}"`
               : ( /* linux */ `x-terminal-emulator -e bash -c "${cmds.node} ; exec bash"`
                              + ` || gnome-terminal -- bash -c "${cmds.node} ; exec bash"` )

    // Init STDOUT vars
    const availPort = await getPort({ port: portNumbers(3000, 3999) })
    const reAccessInfo = /Available on:[\s\S]+/
    const enrichedAccessInfo = `Listening at ${by}http://localhost:${availPort}${nc}\n\n`
        + `Press ${bw}CTRL+C${nc} in terminal to stop server\n`
        + `Press ${bw}CTRL+SHIFT+R${nc} in browser to clear cache (if assets/data/urls.json updated)\n`

    // SPAWN new terminal from OG one (to preserve cmd prompt)
    if (!process.argv.includes('--recursing'))
        return require('child_process').spawn(cmds.spawn, { shell: true, detached: true, stdio: 'ignore' })
            .on('error', err => console.error(`Failed to open new terminal: ${err.message}`))

    // PREVIEW page
    require('child_process').exec(`http-server -p ${availPort}`).stdout.on('data', data => {
        if (reAccessInfo.test(data)) { // server ready msg, enrich then preview site
            data = data.replace(reAccessInfo, enrichedAccessInfo)
            open(`http://localhost:${availPort}${ process.argv.includes('--debug') ? '?debug=all' : '' }`)
        }
        console.log(data) // on each stdout output
    })

})()
