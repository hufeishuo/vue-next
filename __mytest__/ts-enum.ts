{
  enum Enum {
    A = 1,
    B,
    C = 2
  }
  const log = (...args: any[]) => {
    console.log.apply(null, args)
  }

  enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }

  log(Direction.Left)

  enum ShapeKind {
    Circle,
    Square
  }

  interface Circle {
    kind: ShapeKind.Circle
    radius: number
  }

  interface Square {
    kind: ShapeKind.Square
    sideLength: number
  }
  let s: Square = {
    kind: ShapeKind.Square,
    sideLength: 40
  }

  let c: Circle = {
    kind: ShapeKind.Circle,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100
  }

  log(s, c)

  log(Enum.B, Enum.C)
  log(Enum.B === Enum.C)
}
