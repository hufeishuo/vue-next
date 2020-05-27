import { log } from './util.js'

type A = number
type B = string
type C = A | B

function extend<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  let result = <T & U>{}
  for (let id in first) {
    ;(<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}

let c: { name: string } = extend(1, 'a')

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet // ok
  }
  name = name || 'cob'
  return postfix('great')
}
log(fixed('good'))

log(fixed(''))
log(fixed(null))

type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'> // "b" | "d"

log(2 ** 2, 3 ** 2, 4 ** 2, 3 ** 3)

log('proxy start ......')
interface Car {
  wheel: number
}

let car: Car = {
  wheel: 4
}

let proxyCar = new Proxy(car, {
  get() {
    return 1
  }
})

log(proxyCar.wheel)

interface T {
  a: number
  b: string
}
interface U {
  c: number
  a: number
}

type newType = Omit<T, keyof U>

let newVar: newType = {
  b: 'ab'
}

log(newVar.b)



function foo(x: string | number | boolean) {
  if (typeof x === "string") {
      x; // 这里x的类型是string
      x = 1;
      x; // 这里x的类型是number
  }
  x;// 这里x的类型是number | boolean
}

function bar(x: string | number) {
  if (typeof x === "number") {
      return;
  }
  x; // 这里x的类型是string
}
