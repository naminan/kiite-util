const fs = require('fs')
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 2085 })

const MARKER = 'KIITE_CAFE_WORLD:'
const vrchatPath = process.env.APPDATA + '/../LocalLow/VRChat/VRChat/'

wss.on('connection', ws => {
    console.log('connected!')
})


var buf = Buffer.alloc(1024)
let openFilename = ''
let readPosition = 0
let fd = null
function open(filename) {
    if (!fs.existsSync(vrchatPath + filename))
        return
    console.log(filename)
    openFilename = filename
    fd && fs.closeSync(fd)
    fd = fs.openSync(vrchatPath + filename, 'r')
    const stat = fs.statSync(vrchatPath + filename)
    readPosition = stat.size
}
fs.watch(vrchatPath, (event, filename) => {
    if (!filename.startsWith('output_log'))
        return
    if (event == 'rename' || (event == 'change' && openFilename != filename)) {
        open(filename)
    }
    if (event == 'change' && openFilename == filename) {
        for (; ;) {
            buf.fill(0)
            const readBytes = fs.readSync(fd, buf, 0, buf.length, readPosition)
            if (readBytes) {
                readPosition += readBytes
                const txt = buf.toString()
                //console.log(txt)
                const markerIndex = txt.indexOf(MARKER)
                const endIndex = txt.indexOf('\n', markerIndex)
                if (markerIndex != -1) {
                    const datas = txt.slice(markerIndex + MARKER.length, endIndex).split(',')
                    console.log(datas[0], datas[1] ?? '')
                    wss.clients.forEach(client => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(JSON.stringify({ type: datas[0], p: datas[1] }));
                        }
                    })
                }
            } else {
                break
            }
        }
    }
})
