/*
 * @Author: your name
 * @Date: 2020-12-12 16:52:54
 * @LastEditTime: 2020-12-12 16:55:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\leetCodePractice\twoDivid.js
 */

const EPSILON = 0.0000000001;

function sqrt2() {
    let low = 1.4, high = 1.5;
    let mid = (low + high) / 2;

    while (high - low > EPSILON) {
        if (mid * mid > 2) {
            high = mid;
        } else {
            low = mid;
        }
        mid = (high + low) / 2;
    }

    return mid;
}

console.log(sqrt2())
