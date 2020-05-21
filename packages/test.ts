interface User {
  name: string
  age: number
  id: number
}
type Partial1<T> = { [K in keyof T]?: T[K] }

type PartialUser = Partial1<User>

const u1: User = {
  name: '213',
  age: 123,
  id: 123
}

const u2: PartialUser = {
  name: 'boo'
}

const strs = ['aaafsd', 'aawwewer', 'aaddfff']

/**
 * description 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  return strs.reduce((a, b) => (a.length > b.length ? sli(b, a) : sli(a, b)))

  function sli(a, b) {
    while (a && b.indexOf(a) !== 0) {
      a = a.slice(0, -1)
    }
    return a
  }
}

Promise.all = function(promises) {
  if (promises.length === 0) return Promise.resolve()

  return new Promise(function(resolve, reject) {
    var count = promises.length,
      results = new Array(count)

    for (var i = 0; i < count; i++) {
      promises[i].then(onFulFilled(i), onRejected)
    }

    function onFulFilled(i) {
      return function(ret) {
        count--
        results[i] = ret
        if (count === 0) {
          resolve(results)
        }
      }
    }

    function onRejected(err) {
      reject(err)
    }
  })
}
