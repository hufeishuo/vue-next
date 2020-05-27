import { log, typelog } from './util.js'

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: <U>(arg: U) => U = identity

console.log(myIdentity)

typelog(identity(1))
typelog(identity('12'))
typelog(myIdentity(true))
typelog(myIdentity(Symbol('symbolTypeof')))

interface GenericIdentifyFn<T = number> {
  (arg: T): T
}

let myIdentity1: GenericIdentifyFn<number> = identity
let myIdentity2: GenericIdentifyFn<string> = identity

typelog(myIdentity1(1))

interface obj {
  name: string
  age?: number
  [propName: string]: any
}

log({ name: 'book', age: 12 })
log({ name: 'book', agee: 12 })

enum Week {
  MON = 1,
  TUS = 2,
  WEN = 3
}

interface Weeks {
  day: Week
}

let w: Weeks = {
  day: Week.TUS
}

log(w)

interface NumberDictionary {
  [index: number]: number
  length: number // 可以，length是number类型
}

let myArr: NumberDictionary = [1, 2]

myArr[3] = 4
log(myArr[0])
myArr[1] = 12
log(myArr[1])
log(myArr)

interface ReadonlyStringArray {
  readonly [index: number]: string
}
let myArray: ReadonlyStringArray = ['Alice', 'Bob']

/**
 * 类静态部分与实例部分的区别
 */
interface ClockConstructor {
  tick: () => void
  new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
  tick(): void
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  static tick() {
    log('static tick ')
  }
  tick() {
    console.log('beep beep')
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock')
  }
  static tick() {
    log('tick tock static tick ')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

digital.tick()

analog.tick()

DigitalClock.tick()
AnalogClock.tick()

interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 10

/**
 * 混合类型
 */
interface Counter {
  (start: number): string
  interval: number
  reset(): void
  addition: string
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {
    return String(start)
  }
  counter.interval = 123
  counter.reset = function() {}
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
log(c.addition)

class Control {
  public state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// 错误：“Image”类型缺少“state”属性。
class MyImage extends Control implements SelectableControl {
  select() {}
}
new MyImage()
new Button()
new TextBox()

/**
 * 索引 key??  index??
 */

interface KeyDemo {
  [key: number]: number
}

interface IndexDemo {
  [index: string]: string
}

let keyDemo: KeyDemo = {
    0: 1,
    1: 2,
    2: 123
  },
  indexDemo: IndexDemo = {
    bar: 'bar',
    goo: 'Good',
    1: '11'
  }

log(keyDemo, indexDemo)
