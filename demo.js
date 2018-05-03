import * as C from './utils/index.js'; // 按需分析引入
// const C = require('./utils'); // 全量引入
import { version } from './package.json';


const show = cb => {
    // 动态引入
    import('./utils/async_module').then(route => {
        cb(route);
    })
}

show(route => {
    console.log(`hello ${version} ${C.a} ${route}`);
})