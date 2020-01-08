"use strict"
const webpack = require('webpack');
const path = require('path');

const devServerPort = 3000;

let outputFileName = 'stickies',
    env = process.env.WEBPACK_ENV,
    plugins = [],
    outPutConfig = {},
    optimization = {},
    outputFile,
    devServerConfig;

//Default plugins
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new webpack.NamedModulesPlugin());
// plugins.push(new HtmlWebpackPlugin({
//   template: 'public/index.html'
// }))

//Environment specific settings
if (env === 'prod') {
    optimization.minimize = true;
    outputFile = outputFileName + '.min.js';
} else {
    optimization.minimize = false;
    outputFile = outputFileName + '.js';
}

//Output configuration
outPutConfig.filename = outputFile;
outPutConfig.path = path.resolve(__dirname, 'dist');
outPutConfig.publicPath = '/dist/';
outPutConfig.hotUpdateMainFilename = '[hash].json';
outPutConfig.library = 'stickies';
outPutConfig.libraryTarget = 'umd';
outPutConfig.libraryExport = 'default';

//Dev Server configuration
devServerConfig = {
    port: devServerPort,
    publicPath: '/dist/',
    hotOnly: true,
    open: true,
    openPage: './dist/index.html',
    public: 'localhost:' + devServerPort,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    clientLogLevel: 'info',
    stats: {
        colors: true,
        assets: true,
        warnings: true
    }
};
module.exports = {
  entry: 
      './js/demo.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           }
         ]
      },
    optimization: optimization,
    plugins: plugins,
    devServer: devServerConfig
};
