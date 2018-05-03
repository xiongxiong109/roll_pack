'use strict';

const a = 'asas';

var version = "1.0.0";

console.log(version);
console.log(a);

// 动态引入
Promise.resolve().then(function () { return async_module; }).then(route => {
    console.log(route);
});

// 异步模块
const routeIndex = 'hello index page';

mosule.exports = routeIndex;

var async_module = /*#__PURE__*/Object.freeze({

});
