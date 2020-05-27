import { log } from './util.js'

function buildName(this: any, firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName
}

log(buildName('Foo', 'Book'))
log(buildName('Foo', '12'))

/**
 * 定义函数类型的关键点： 参数类型和函数返回值类型
 */

interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}
let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

/**
 * overload
 */
function f(x: number): number
function f(x: string, y: string): string
function f(z: boolean): boolean
function f(x, y?) {
  return x
}

f(1)
f(true)
f('1', '1')
f('{}', 'b')
