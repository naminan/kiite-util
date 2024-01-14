const fs = require('fs')
const WebSocket = require('ws')

const MARKER = 'KIITE_CAFE_WORLD:'
const vrchatPath = process.env.APPDATA + '/../LocalLow/VRChat/VRChat/'

const wss = new WebSocket.Server({ port: 2085 })
wss.on('connection', ws => {
    console.log('connected!')
})


const buf = Buffer.alloc(1024)
let openFilename = ''
let readPosition = 0
let fd = null
function open(filename) {
    if (!filename && !fs.existsSync(vrchatPath + filename))
        return
    if (openFilename == filename)
        return
    console.log('open', filename)
    openFilename = filename
    fd && fs.closeSync(fd)
    fd = fs.openSync(vrchatPath + filename, 'r')
    const stat = fs.statSync(vrchatPath + filename)
    readPosition = stat.size
}
function read() {
    while (fd) {
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
                const date = new Date();
                date.setTime(date.getTime() - (date.getTimezoneOffset() * 60 * 1000));
                const str_date = date.toISOString().replace('T', ' ').slice(0, 19);
                console.log(str_date, datas[0], datas[1] ?? '')
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
fs.watch(vrchatPath, (event, filename) => {
    if (!filename.startsWith('output_log'))
        return
    if (event == 'rename' || (event == 'change')) {
        open(filename)
    }
    if (event == 'change' && openFilename == filename) {
        read()
    }
})

setInterval(read, 1000)
setInterval(() => {
    open(fs.readdirSync(vrchatPath).filter(e => e.startsWith('output_log')).sort().pop())
}, 10_000)
console.log('Start vrchat-bridge')
