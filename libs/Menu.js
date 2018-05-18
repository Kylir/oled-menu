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
  let parentNode
  let selected = 0
  
  // moves the selected up = decrease the index (or loop if more than the maximum)
  control.on('up', () => {

  })

  control.on('down', () => {})

  // triggers the action of the node. Navigation if it is not a leaf or a command.
  control.on('click', () => {})

  /**
   * Create a displayable menu from the current node.
   * The structure is an object with an array of strings and the index of the selected one.
   * {texts: ["a", "b"], selected: 0}
   */
  this.createDisplayableMenu = () => {

  }

  /**
   * Browse the menu and add back nodes and parent
   */
  this.addBackAndParent = () => {

  }

}

module.exports = Menu
