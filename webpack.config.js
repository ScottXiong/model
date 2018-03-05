const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'), //找不到字体，设置一层dist
    publicPath:'/dist/',
    filename: 'js/app.js'
  },
  module: {
	  rules: [
	  //jsx
	    {
	      test: /\.jsx$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['env','react']
	          }
	      }
	    },
	    //css文件的处理
	    {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        })
        },
        //sass 文件的处理
        {
        	test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // 在开发环境使用 style-loader
                fallback: "style-loader"
            })
        },
        //图片的处理url-loader
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'resource/[name].[ext]'
                }
              }
            ]
       },
       //字体
       {
            test: /\.(svg|eot|ttf|woff|woff2|otf)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'resource/[name].[ext]'
                }
              }
            ]
       }
	  ]
  },
  plugins: [
  //处理html文件
	  new HtmlWebpackPlugin({
	  	template: './src/template/index.html'
	  }),
    //独立css文件 
	  new ExtractTextPlugin("css/[name].css"),
    //提出公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      filename:'js/base.js'
    })

  ],
  devServer: {
     port:8989,
     contentBase: './dist/'
   }
};