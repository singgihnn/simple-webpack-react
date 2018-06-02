const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
    inline: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  }
};