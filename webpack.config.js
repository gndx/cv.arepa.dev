const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
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
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin([
      { from: './public/manifest.json' },
      { from: './manifest.json' },
    ]),
    new FaviconsWebpackPlugin({
      logo: './public/icon.png',
      prefix: 'icons/',
      inject: true,
      background: '#fff',
      title: 'React CV',
      icons: {
        android: true,
        appleIcon: true,
        favicons: true,
        opengraph: false,
        twitter: false,
      }
    }),
  ],
};