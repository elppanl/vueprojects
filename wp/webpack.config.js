const path = require('path');
module.exports={
    //入口文件的配置项
    entry:{
        main:'./src/main.js',
        main2:'./src/main2.js'
    },
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'dist'),
        //输出的文件名称
        filename:'[name].js'
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules: [
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
          ]
    },
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{
         //设置基本目录结构
         contentBase:path.resolve(__dirname,'dist'),
         //服务器的IP地址，可以使用IP也可以使用localhost
         host:'localhost',
         //服务端压缩是否开启
         compress:true,
         //配置服务端口号
         port:1717
    }
}