const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  entry: [
    './src/js/index.js',
    './src/css/main.sass'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },

    {
      test: /\.sass|scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },

    {
      test: /\.(png|jpg|gif|ttf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },

    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin("css/styles.css")
  ]
};
