import webpack from 'webpack'
import {config} from './webpack.config.common.js'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'

export default () => {
  return {
    bail: true,
    devtool: 'source-map',

    entry: config.entry,

    output: {
      filename: config.output.filename,
      path: resolve(__dirname, '../../../', 'build'),
      publicPath: '/'
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'app/public/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),

      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),

      new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
      rules: [
        config.module.rules.js
      ]
    }
  }
}
