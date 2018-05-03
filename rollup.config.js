// 走配置文件打包
import json from 'rollup-plugin-json'

export default [
    {
        input: [
            './demo.js'
        ],
        output: {
            // file: 'demoBundle.js',
            format: 'cjs',
            dir: 'dist' // 指定dir的时候input是一个数组
        },
        experimentalCodeSplitting: true, // 动态代码分片
        experimentalDynamicImport: true, // 动态代码分片
        plugins: [ // 使用json插件处理json文件
            json()
        ]
    }
]