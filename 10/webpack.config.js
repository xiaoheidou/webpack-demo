var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
/*CommonsChunkPlugin插件是提取多个js的公共部分*/
module.exports = {
    entry: {
        bundle1: './index.jsx',
        bundle2: './a.jsx'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    plugins: [
        new CommonsChunkPlugin('init.js')
    ]
}
