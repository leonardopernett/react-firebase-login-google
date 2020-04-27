const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv-webpack');


const pluginHTML =  new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'index.html'
})

const pluginCSS=  new MiniCssExtractPlugin({
    template:'./src/index.css',
    filename:'index.css'
})

const devMode = process.env.NODE_ENV !=='prodcution';

module.exports = {  
    devServer :{
        port:3000,
        historyApiFallback: true
    },

    module: {
        rules: [
          { 
              test: /\.js$/, 
              use: ['babel-loader'],
              exclude:/node_modules/
          },
          { 
            test: /\.css$/, 
            use: [devMode ? MiniCssExtractPlugin.loader: 'style-loader','css-loader']
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
               {
                loader:'file-loader',
                options:{
                    name: '[name].[ext]',
                    outputPath:'assets/',
                    useRelativPath:true
                  }
               }
              
            ],
        },
           
        ]
      },
      plugins: [pluginHTML,pluginCSS, new dotenv() ],
      devtool:'source-map'

}