# webpack-demo


初学webpack <br/>
1、首先有node

2、npm install -g webpack  全局安装webpack

3、npm install -g webpack-dev-server  安装webpack服务

4、进入项目 npm init -y  建立package.json文件


#产看案例
1、npm install //下载依赖
2、进入案例01目录   执行  webpack-dev-server
3、打开浏览器   localhost：8080   

小知识：
npm install --save--dev ***(下载以来的名称)

每个目录都有 自动执行webpack的  webpack.config.js文件  我们也可以直接手动执行   webpack index.js bundle.js 

案例：
案例01： css的打包
02：jsx打包
03：图片打包
04：uglifyJsPlugin 压缩插件
05：最简单输出
06：没有html文件，直接利用服务器打开浏览器并且设置端口
07：Environment flags 环境标记  您可以启用一些代码只有在开发环境与环境标志
 //Linux & Mac
$ env DEBUG=true webpack-dev-server

 //Windows
$ set DEBUG=true
$ webpack-dev-server
08：webpack的文件分布  分裂
09：


