const ssd1306 = require('ssd1306-i2c-js')
const display = ssd1306.display
const FONT = ssd1306.Font.UbuntuMono_8ptFontInfo

let menus = {
    type: 'root',
    name: '',
    items: [
        {type: 'node', name: 'Admin', items: [
            {type: 'cmd', name: 'Shutdown', cmd: 'sudo shutdown'},
            {type: 'cmd', name: 'Restart', cmd: 'sudo restart'}
        ]},
        {type: 'node', name: 'Network', items: [
            {type: 'cmd', name: 'Restart Wifi', cmd: 'ls'},
            {type: 'cmd', name: 'No idea...', cmd: 'pwd'}
        ]},
        {type: 'node', name: 'Empty', items: []}
    ]
}

/**
 * Ends gracely the program.
 */
process.on('SIGINT', function(){
    display.clearScreen()
    display.refresh()
    display.dispose()
    process.exit()
})

/**
 * Initialise the display by setting the I2C address, the font and turning on the screen.
 * @param {*} dis The display to initialise
 */
let initDisplay = (dis) => {
    dis.init(1, 0x3C)
    dis.turnOn()
    dis.clearScreen()
    dis.setFont(FONT);
}

/**
 * Draw the string `text` at the line number `lineNumber` on the display `dis`.
 * @param {*} dis The display to use
 * @param {*} lineNumber The line to display (from 0 to 5) 
 * @param {*} text The text to display
 */
let drawStringLineN = (dis, lineNumber, text) => {
    dis.drawString(0, 10 * lineNumber, text, 1, 1, 1)
}

/**
 * Draw the string `text` at the line number `lineNumber` on the display `dis`.
 * @param {*} dis The display to use
 * @param {*} lineNumber The line to display (from 0 to 5) 
 * @param {*} text The text to display
 */
let drawSelectedStringLineN = (dis, lineNumber, text) => {
    dis.fillRect(0, 10 * lineNumber, 128, 10, 1, 1)
    dis.drawString(0, 10 * lineNumber, text, 1, 0, 1)
}

initDisplay(display)

drawStringLineN(display, 0, '  here! 0')
drawStringLineN(display, 1, '  here! 1')
drawStringLineN(display, 2, '  here! 2')
drawSelectedStringLineN(display, 3, '  here! 3')
drawStringLineN(display, 4, '  here! 4')
drawStringLineN(display, 5, '  here! 5')

display.refresh()
