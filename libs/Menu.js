/**
 * Parses a JSON menu and uses display.renderMenu() to display the visible items of the menu.
 * The program also uses a control object to receive user interaction.
 *
 * When the number of items is greater or smaller than the max or the min, the Menu object
 * create a displayable menu
 */

class MenuManager {
  constructor (jsonMenus, display, control) {
    // from the parameters
    this.jsonMenus = jsonMenus
    this.display = display
    this.control = control

    // initialise other properties we will need later
    this.currentNode = this.jsonMenus
    this.parentNode = this.currentNode
    this.selected = 0
    this.currentMenus = this.getMenuTexts()

    this.initialiseControl()
  }

  /**
   * Create a displayable menu from the current node.
   * The structure is an object with an array of strings and the index of the selected one.
   * {texts: ["a", "b"], selected: 0}
   */
  getMenuTexts () {
    let texts = []

    // failsafe for malformed menus
    if (!this.currentNode.items) {
      return texts
    }

    // Display back if not the root
    if (this.currentNode.type === 'menu') {
      texts.push('Back')
    }
    // Browse the items to extract the texts
    this.currentNode.items.map((item) => {
      texts.push(item.text)
    })
    return texts
  }

  initialiseControl () {
    // moves the selected up = decrease the index
    this.control.on('up', () => {
      if (this.selected > 0) {
        this.selected--
        this.display.renderMenu({strings: this.currentMenus, selected: this.selected})
      }
    })

    // Moves the selected item to the bottom.
    this.control.on('down', () => {
      if (this.selected < this.currentMenus.length) {
        this.selected++
        this.display.renderMenu({strings: this.currentMenus, selected: this.selected})
      }
    })

    // triggers the action of the node. Navigation it it is a node.
    this.control.on('click', () => {
      // Back? we need to move to the parent

      // if it is a node we need to change to children and update the parent
      // Don't forget to reset the selected and regenerate the menus

      // if it is a leaf, execute the command.
    })
  }
}

module.exports = MenuManager
/* Example of menu
let menus = {
  type: 'root',
  text: '',
  items: [
    {
      type: 'menu',
      text: 'Admin',
      items: [
        { type: 'cmd', text: 'Shutdown', cmd: 'sudo shutdown' },
        { type: 'cmd', text: 'Restart', cmd: 'sudo restart' }
      ]
    },
    {
      type: 'menu',
      text: 'Network',
      items: [
        { type: 'cmd', text: 'Restart Wifi', cmd: 'ls' },
        { type: 'cmd', text: 'No idea...', cmd: 'pwd' }
      ]
    },
    { type: 'menu', text: 'Empty', items: [] }
  ]
}
*/
