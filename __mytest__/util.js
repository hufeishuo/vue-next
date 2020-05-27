export const log = (...args) => {
  console.log.apply(null, args)
}
export const typelog = (v) => {
  console.log(typeof v)
}
