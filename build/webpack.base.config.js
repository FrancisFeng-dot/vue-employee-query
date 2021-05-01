
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    output:{
        filename:'employee-query.js'
    },
    resolve:{
        extensions:['.js','.ts','.tsx','.vue'],
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/i,
                loader:'vue-loader'
            },
            {
                test:/\.tsx?$/i,
                use:[{
                    loader:'ts-loader',
                    options:{
                        appendTsSuffixTo:[/\.vue$/]
                    }
                }],

                exclude:/node_modules/
            },
            {
                test:/\.css$/i,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}