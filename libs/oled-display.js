/**
 * Display of menus using an oled screen (128x64).
 * Main interface is the renderMenu that display the menus (list of lines of text with one selected.)
 */

const ssd1306 = require('ssd1306-i2c-js')
const display = ssd1306.display
const FONT = ssd1306.Font.UbuntuMono_8ptFontInfo

const I2C_ADDRESS = 0x3C
const I2C_BUS = 1
const DISPLAY_WIDTH = 128

let oled = {
  /**
   * Initialise the display by setting the I2C address, the font and turning on the screen.
   */
  initDisplay: () => {
    display.init(I2C_BUS, I2C_ADDRESS)
    display.turnOn()
    display.clearScreen()
    display.setFont(FONT)
  },

  /**
   * Draw a menu (an array of strings and a selected index) and refresh the display
   */
  renderMenu: ({strings, selected}) => {
    strings.map((string, index) => {
      if (index === selected) {
        oled.drawSelectedStringLineN(index, string)
      } else {
        oled.drawStringLineN(index, string)
      }
    })
    oled.refresh()
  },

  /**
   * Draw the string `text` at the line number `lineNumber` on the display `dis`.
   * @param {*} lineNumber The line to display (from 0 to 5)
   * @param {*} text The text to display
   */
  drawStringLineN: (lineNumber, text) => {
    display.drawString(0, 10 * lineNumber, text, 1, 1, 1)
  },

  /**
   * Draw the string `text` at the line number `lineNumber` on the display `dis`.
   * The string will be highlighted by a box (= drawn in black on a white background)
   * @param {*} lineNumber The line to display (from 0 to 5)
   * @param {*} text The text to display
   */
  drawSelectedStringLineN: (lineNumber, text) => {
    display.fillRect(0, 10 * lineNumber, DISPLAY_WIDTH, 10, 1, 1)
    display.drawString(0, 10 * lineNumber, text, 1, 0, 1)
  },

  /** Refresh the display. */
  refresh: () => {
    display.refresh()
  },

  /**
   * Free the resources properly (? At least it deletes the screen)
   */
  terminateGracefully: () => {
    display.clearScreen()
    display.refresh()
    display.dispose()
  }

}

module.exports = oled
