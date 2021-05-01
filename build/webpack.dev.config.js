const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.ts',
    devtool:'cheap-module-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/tpl/index.html'
        })
    ]
}