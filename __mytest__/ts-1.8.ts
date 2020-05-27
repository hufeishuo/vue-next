{
  interface B<T> {
    [prop: string]: T
  }
  function assign<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
      ;(target as U)[id] = source[id]
    }
    return target
  }

  let x = { a: 1, b: 2, c: 3, d: 4 }
  assign(x, { b: 10, d: 20 })
  // assign(x, { e: 0 });  // 错误
}

function f(x) {
  if (x) {
    return true
  } else {
    return false
  }

  x = 0 // 错误: 检测到不可及的代码.
}

class Singleton {
  private static instance: Singleton

  private constructor() {}

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

// let e = new Singleton() // 错误：Singleton的构造函数是私有的。
let v = Singleton.getInstance()

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {}
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      ;(result as First)[prop] = first[prop]
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      ;(result as Second)[prop] = second[prop]
    }
  }
  return result as First & Second
}


interface Error {
  stack?: string;
}


interface Error {
  code?: string;
  path?: string;
  stack?: string;  // OK
}