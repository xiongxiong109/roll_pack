'use strict';

var a = 'asas';

var version = "1.0.0";

var show = function show(cb) {
    // 动态引入
    Promise.resolve(require("./async_module.js")).then(function (route) {
        cb(route);
    });
};

show(function (route) {
    console.log('hello ' + version + ' ' + a + ' ' + route);
});
