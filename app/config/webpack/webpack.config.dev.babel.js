import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { config } from './webpack.config.common.js'

export default () => {
  return {
    entry: config.entry,
    output: {
      publicPath: '/'
    },
    devServer: {
      hot: true,
      overlay: true,
      historyApiFallback: true,
      stats: {
        colors: true,
        chunks: false,
        'errors-only': true
      }
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: './app/src/public/index.html'
      }),

      new webpack.HotModuleReplacementPlugin(),

      new webpack.NamedModulesPlugin(),

      new webpack.NoEmitOnErrorsPlugin(),

      new webpack.DefinePlugin({
        '__API': '"http://localhost:8080/api"'
      })
    ],
    module: {
      rules: [
        config.module.rules.js
      ]
    }
  }
}
