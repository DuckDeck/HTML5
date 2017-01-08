var path = require('path');
module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',//配置生成Source Maps，选择合适的选项,用来调试
  output: {
    path: './build',
    publicPath:'build/',
    filename: 'build.js'
  },
  //配置自动刷新,如果打开会使浏览器刷新而不是热替换
 devServer: {
    // historyApiFallback: true,
    // hot: true,
    // inline: true,
    // grogress: true,
    proxy:{
       '/v2/*': {  //代理转发，没想到去掉后面的http://a.impingo.me/最后面的/就行了
                target: 'https://api.douban.com',  
                secure: false,
                changeOrigin: true,
            }  
    }
 },
  module: {
    loaders: [
      //转化ES6语法
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      //解析.vue文件
      {
        test:/\.vue$/,
        loader:'vue'
      },
      //图片转化，小于8K自动转化为base64的编码
      {
        test: /\.(png|jpg|gif)$/,
        loader:'url-loader?limit=8192'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!scss'
       }
    ]
  },
  vue:{
    loaders:{
      js:'babel',
    }
  },
  resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            vue: path.join(__dirname,'./node_modules/vue/dist/vue.js')
        }
    }    
}