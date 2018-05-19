/**
 * Parses a JSON menu and uses display.renderMenu() to display the visible items of the menu.
 * The program also uses a control object to receive user interaction.
 * 
 * When the number of items is greater or smaller than the max or the min, the Menu object
 * create a displayable menu 
 */

let Menu = (jsonMenus, display, control) => {
  // The following variables will keep track of where we are in the menu.
  // When we start we point at the root node and there is no parent.
  let currentNode = jsonMenus
  let parentNode = currentNode
  let selected = 0
  
  // moves the selected up = decrease the index (or loop if more than the maximum)
  control.on('up', () => {})

  control.on('down', () => {})

  // triggers the action of the node. Navigation if it is not a leaf or a command.
  control.on('click', () => {})

  /**
   * Create a displayable menu from the current node.
   * The structure is an object with an array of strings and the index of the selected one.
   * {texts: ["a", "b"], selected: 0}
   */
  this.createDisplayableMenu = () => {
    let menu = {texts: [], selected: 0}
    //Display back if not the root
    if (currentNode.type === 'node') {
      menu.texts.push('Back')
    }
    // Browse the items to extract the texts
    currentNode.items.map((item) => {
      menu.texts.push(item.text)
    })
    return menu
  }

}

module.exports = Menu


/* Example of menu
let menus = {
  type: 'root',
  text: '',
  items: [
    {
      type: 'node',
      text: 'Admin',
      items: [
        { type: 'cmd', text: 'Shutdown', cmd: 'sudo shutdown' },
        { type: 'cmd', text: 'Restart', cmd: 'sudo restart' }
      ]
    },
    {
      type: 'node',
      text: 'Network',
      items: [
        { type: 'cmd', text: 'Restart Wifi', cmd: 'ls' },
        { type: 'cmd', text: 'No idea...', cmd: 'pwd' }
      ]
    },
    { type: 'node', text: 'Empty', items: [] }
  ]
}
*/