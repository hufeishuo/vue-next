const log = (...args) => {
  console.log.apply(null, args)
}

function identity<T>(arg: T): T {
  return arg
}

log(typeof identity(1))
log(typeof identity('1'))
log(typeof identity(true))

class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
}
let dog: Animal = new Animal('dog')
log(typeof identity(dog))

/**
 * 泛型约束
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a') // okay
getProperty(x, 'b') // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

{
  class BeeKeeper {
    hasMask: boolean
  }

  class ZooKeeper {
    nametag: string
  }

  class Animal {
    numLegs: number
  }

  class Bee extends Animal {
    keeper: BeeKeeper
  }

  class Lion extends Animal {
    keeper: ZooKeeper
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c()
  }

  createInstance(Lion).keeper.nametag // typechecks!
  createInstance(Bee).keeper.hasMask // typechecks!
}

{
  enum EventType {
    Mouse,
    Keyboard
  }

  interface Event {
    timestamp: number
  }
  interface MouseEvent extends Event {
    x: number
    y: number
  }
  interface KeyEvent extends Event {
    keyCode: number
  }

  function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
  }

  // Unsound, but useful and common
  listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y))

  // Undesirable alternatives in presence of soundness
  listenEvent(EventType.Mouse, (e: Event) =>
    console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y)
  )
  listenEvent(EventType.Mouse, <(e: Event) => void>(
    ((e: MouseEvent) => console.log(e.x + ',' + e.y))
  ))

  // Still disallowed (clear error). Type safety enforced for wholly incompatible types
  listenEvent(EventType.Mouse, (e: number) => console.log(e))
}
