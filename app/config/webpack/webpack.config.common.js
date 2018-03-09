export const config = {
  entry: ['babel-polyfill', './app/src/index.js'],
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
  },
  output: {
    filename: 'bundle.js'
  }
}
