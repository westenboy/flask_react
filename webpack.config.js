var path = require("path");


module.exports = {
    devtool: 'source-map',
  entry:  path.join(__dirname, '/app/static/src/index.js'),
  output: {
    path: path.join(__dirname, '/app/static/build'),//打包后的文件存放的地方
	filename: "bundle.js"//打包后输出文件的文件名
  },
	  resolve: {
        extensions: ['.js']
    },
module: {
      rules: [
          {
             test:/\.js$/,
              include: path.join(__dirname, '/app/static'),
              loader: 'babel-loader'
          }
      ]
  }
};

