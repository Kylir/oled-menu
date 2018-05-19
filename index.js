
const Menu = require('./libs/Menu')
const oled = require('./libs/oled-display')
const encoder = require('./libs/ec11-control')

// Fake menu for development
let menus = {
  type: 'root',
  name: '',
  items: [
    {
      type: 'node',
      name: 'Admin',
      items: [
        { type: 'cmd', name: 'Shutdown', cmd: 'sudo shutdown' },
        { type: 'cmd', name: 'Restart', cmd: 'sudo restart' }
      ]
    },
    {
      type: 'node',
      name: 'Network',
      items: [
        { type: 'cmd', name: 'Restart Wifi', cmd: 'ls' },
        { type: 'cmd', name: 'No idea...', cmd: 'pwd' }
      ]
    },
    { type: 'node', name: 'Empty', items: [] }
  ]
}

/**
 * Ends gracefully the program.
 */
process.on('SIGINT', () => {
  oled.terminateGracefully()
  process.exit()
})

let menu = new Menu(menus, oled, encoder)


