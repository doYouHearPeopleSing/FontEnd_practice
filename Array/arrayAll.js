/*
 * @Author: your name
 * @Date: 2020-11-19 14:39:55
 * @LastEditTime: 2020-11-19 14:40:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\arrayAll.js
 */

const items = [
    {name: 'Bike',      price: 100 },
    {name: 'TV',        price: 200 },
    {name: 'Album',     price: 10  },
    {name: 'Book',      price: 5   },
    {name: 'Phone',     price: 500 },
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25  }
]

const filteredItems =  items.filter((item) => {
    return item.price <= 100;
})

const itemNames = items.map((item) => {
    return item.price;
})

const theFoundItems = items.find((item) => {
    return item.name ==='Book'
})