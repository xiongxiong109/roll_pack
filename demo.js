import * as C from './utils/index.js'; // 按需分析引入
// const C = require('./utils'); // 全量引入
import { version } from './package.json';

console.log(version);
console.log(C.a);

// 动态引入
import('./utils/async_module').then(route => {
    console.log(route);
})