const userLeft = false;
const userWatchingCatMeme = false;


// function watchTutorialCallback(callback, errorCallback) {
//     // let userLeft = false
//     // let userWatchingCatMeme = false
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
//   }
  
  function watchTutorialPromise() {    
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (userWatchingCatMeme) {
        reject({
          name: 'User Watching Cat Meme',
          message: 'WebDevSimplified < Cat' 
        })
      } else {
        resolve('Thumbs up and Subscribe')
      }
    })
  }
  
  // watchTutorialCallback(message => {
  //   console.log(message)
  // }, error => {
  //   console.log(error.name + ' ' + error.message)
  // })
  
  watchTutorialPromise().then(message => { 
    console.log(message)
  }).catch(error => {
    console.log(error.name + ' ' + error.message)
  })
  


  