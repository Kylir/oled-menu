/* eslint-env node, jest */

let Menu = require('../libs/Menu')

test('The MenuManager can be instantiated', () => {
  const json = {}
  const mockDisplay = {
    renderMenu: () => {}
  }
  const mockControl = {
    on: () => {}
  }

  let menu = new Menu(json, mockDisplay, mockControl)

  expect(menu).toBeDefined()
})
