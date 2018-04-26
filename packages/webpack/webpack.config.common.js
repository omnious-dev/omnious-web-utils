/**
 * COMMON WEBPACK CONFIG
 */

// Global import
const DotenvPlugin = require('dotenv-webpack');
// const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
  IgnorePlugin
} = require('webpack');

// Local import
const {
  cdn,
  facebook,
  google
} = require('./config/env');
const {
  packageJson,
  srcDir
} = require('./config/path');

module.exports = {
  module: {
    rules: [{
        test: /\.js$/,
        include: srcDir,
        use: 'source-map-loader',
        enforce: 'pre'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(gif|svg|otf|ttf)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {},
    plugins: [new ModuleScopePlugin(srcDir, [packageJson])]
  },
  plugins: [
    new DotenvPlugin({
      systemvars: true
    }),
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new InterpolateHtmlPlugin({ cdn, facebook, google }),
    new StyleLintPlugin()
  ]
};
