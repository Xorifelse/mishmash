async function promiseToGiveItBackLater(value){
  return await new Promise(resolve => setTimeout(resolve(value), 100))
}

function giveItBackLater(value, fn){
  let tmp
  setTimeout(() => {
    tmp = fn(value)
  }, 100)
  return tmp
}

// function addSomePromises(somePromise){
//   let retval = ''

//   return new Promise((resolve, reject) => {
//     try{
//       resolve(somePromise)
//     } catch {
//       reject(somePromise)
//     }
//   })
//   .then(v => retval += v)
//   .then(v => retval += v)
//   .catch(v => retval)
// }

function addSomePromises(somePromise){
  return new Promise(resolve => resolve(somePromise))
  .then(ret => {
    return ret + ret // https://www.youtube.com/watch?v=2Z4m4lnjxkY
  })
  .catch(err => {
    return err + err + err
  })
}

module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}