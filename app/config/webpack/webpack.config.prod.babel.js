import webpack from 'webpack'
import {config} from './webpack.config.common.js'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import {resolve} from 'path'

export default () => {
  return {
    bail: true,
    devtool: 'cheap-module-source-map',
    entry: config.entry,

    output: {
      filename: config.output.filename,
      path: resolve(__dirname, '../../../', 'build'),
      publicPath: '/'
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'app/src/public/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),

      new webpack.NoEmitOnErrorsPlugin(),

      new webpack.optimize.UglifyJsPlugin(),

      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ],

    module: {
      rules: [
        config.module.rules.js
      ]
    }
  }
}
