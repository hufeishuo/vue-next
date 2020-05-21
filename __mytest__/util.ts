export const log = (...args: any[]) => {
  console.log.apply(null, args)
}
export const typelog = (v: any) => {
  console.log(typeof v)
}
