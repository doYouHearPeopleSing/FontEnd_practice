function promiseAll(promises) {
    return new Promise(function(resolve, reject) {

      if (!Array.isArray(promises)) {
        return reject(new TypeError('arguments must be an array'));
      }

      let resolvedCounter = 0;
      let promiseNum = promises.length;
      let resolvedValues = new Array(promiseNum);
      for (let i = 0; i < promiseNum; i++) {
        (function(i) {
          Promise.resolve(promises[i]).then(function(value) {
            resolvedCounter++
            resolvedValues[i] = value
            if (resolvedCounter == promiseNum) {
              return resolve(resolvedValues)
            }
          }, function(reason) {
            return reject(reason)
          })
        })(i)
      }
    })
}
  

  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })

  promiseAll([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(
      messages => {
          console.log(messages);
      }
  )
