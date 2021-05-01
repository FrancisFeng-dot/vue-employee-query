const {merge} = require('webpack-merge');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.pro.config');
const baseConfig = require('./webpack.base.config');

module.exports=(env,argv)=>{
    let config = argv.mode ==='development'?devConfig:proConfig;
    return merge(baseConfig,config);
}