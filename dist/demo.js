'use strict';

const a = 'asas';

var version = "1.0.0";

console.log(version);
console.log(a);

// 动态引入
Promise.resolve(require("./async_module.js")).then(route => {
    console.log(route);
});
