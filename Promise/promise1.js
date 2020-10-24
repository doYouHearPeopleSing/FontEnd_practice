let p = new Promise(
    (resolve,reject) => {
        let a = 1 + 3;
        if(a == 2) {
            resolve('Success');
        } else {
            reject('Faild');
        }
    }
);

p
.then((message) => {
    console.log(`this is in the then ${message}`);
})
.catch((message) => {
    console.log(`this is in catch ${message}`);
});