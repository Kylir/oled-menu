const ssd1306 = require('ssd1306-i2c-js')
const display = ssd1306.display
const Font = ssd1306.Font
const Color = ssd1306.Color
const Layer = ssd1306.Layer

process.on('SIGINT', function(){
    display.dispose()
    process.exit()
})

display.init(1, 0x3C)      // Open bus and initialize driver
display.turnOn()           // Turn on display module
display.clearScreen()      // Clear display buffer

// display.drawString(x:number, y:number, text, size, color, layer)
display.drawString(0, 0, 'A text on the screen')

display.refresh()          // Write buffer in display registries
