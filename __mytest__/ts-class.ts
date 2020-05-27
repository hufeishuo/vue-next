import { log } from './util.js'

/**
 * 派生类通常被称作 子类，基类通常被称作 超类
 */
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)
dog.bark()

{
  class Animal {
    protected name: string
    constructor(theName: string) {
      this.name = theName
    }
  }

  class Rhino extends Animal {
    constructor() {
      super('Rhino')
    }
  }

  class Employee {
    protected name: string
    constructor(theName: string) {
      this.name = theName
    }
  }

  let animal = new Animal('Goat')
  let rhino = new Rhino()
  let employee = new Employee('Bob')

  animal = rhino
  animal = employee as any // 错误: Animal 与 Employee 不兼容.
  log((animal as any).__proto__)
}

class Octopus {
  readonly numberOfLegs: number = 8
  constructor(readonly name: string) {}
}
let dad = new Octopus('Man with the 8 strong legs')
log(dad.name, dad.numberOfLegs)
// dad.name = '123'; // Error  can not assign value to read-only property

class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(str: string) {
    this.greeting = str
  }
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter1: Greeter
greeter1 = new Greeter('')
console.log(greeter1.greet())

let greeterMaker = Greeter
greeterMaker.standardGreeting = 'Hey there!'

let greeter2: Greeter = new greeterMaker('Good')
console.log(greeter2.greet())

log('after modify', Greeter.standardGreeting)

/**
 * 类当做interface使用
 */
class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
log(point3d)
