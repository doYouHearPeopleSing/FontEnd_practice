let arr = [1, 2, 3, 4, 5];

arr.length = 2; // 截断到只剩 2 个元素
console.log( arr ); // [1, 2]

arr.length = 5; // 又把 length 加回来
console.log( arr[3] ); // undefined：被截断的那些数值并没有回来