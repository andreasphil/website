const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = false

module.exports = {
  mode: devMode ? 'development' : 'production',

  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: __dirname + '/site/static/',
    publicPath: '/static/'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  }
}
