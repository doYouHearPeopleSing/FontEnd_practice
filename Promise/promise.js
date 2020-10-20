/*

resove：执行下一步操作
reject：中断当前操作
then：是 Promise 返回的对象，
执行下一个，如果有两个函数
第一个表示resolved(已成功)
第二个表示rejected(已失败) 

*/

// let ajax = function(){
//     console.log('promise','执行');
//     return new Promise(function(resolve,reject){

//       setTimeout(function(){
//         resolve()
//       },

//       1000);
//     });
//   }
  

// ajax().then(function(){
//     console.log('promise','执行ajax方法');
// });


    // let ajax = function(){
    //   console.log('promise','执行');
    //   return new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //       console.log('setTimeout1');
    //       resolve()
    //     },1000);
    //   });
    // }

    // ajax()
    //   .then(function(){
    //     return new Promise(function(resolve,reject){
    //       setTimeout(function(){
    //         console.log('setTimeout2');
    //         resolve();
    //       },1000);
    //     });
    //   })
    //   .then(function(){
    //     console.log('promise3','执行3');
    //   })


    // let ajax = function(num){
    //     console.log('执行4');
    //     return new Promise(function(resolve,reject){
    //       if (num > 5) {
    //         resolve();
    //       }else{
    //         throw new Error('new Error 出错了!')
    //       }
    //     });
    //   }
    //   ajax(6).then(function(){
    //     console.log('log','6');
    //   }).catch(function(err){
    //     console.log('catch',err);
    //   });

    //   ajax(7).then(function() {
    //     console.log('log 7')
    //   }).catch(function(err) {
    //       console.log(err);
    //   })

    //   ajax(3).then(function(){
    //     console.log('log','3');
    //   }).catch(function(err){        
    //     console.log('catch 3',`${err}`);
    //   });

    Promise.resolve('success').then(result => {
        console.log('then: ', result)
    
        return Promise.resolve(result);
    }).catch(err => {
        console.error('catch: ', err);
    
        return Promise.reject(err);
    }).finally(result => {
        console.info('finally: ', result);
    })
      