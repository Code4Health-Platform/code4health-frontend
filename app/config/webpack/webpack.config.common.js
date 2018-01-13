export const config = {

  entry: ['babel-polyfill', './app/src/index.js'],
  output: {
    filename: 'static/js/[name].js'
  },
  module: {
    rules: {
      js: {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    }
  }
}
