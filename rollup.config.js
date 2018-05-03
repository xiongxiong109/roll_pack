// 走配置文件打包
import json from 'rollup-plugin-json'

export default {
    input: './demo.js',
    output: {
        file: 'demoBundle.js',
        format: 'umd'
    },
    plugins: [ // 使用json插件处理json文件
        json()
    ]
}