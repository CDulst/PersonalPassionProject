const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

const path = require('path'); // added for devServer option
const CopyPlugin = require('copy-webpack-plugin'); // added to copy mp4 files

module.exports = (env, {mode}) => {
  console.log(mode);
  return {
    output: {
      filename: '[name].[hash].js'
    },
    devServer: {
      overlay: true,
      hot: true,
      contentBase: path.join(__dirname, 'src') // added to host static files from src directory
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-srcsets-loader',
              options: {
                attrs: [':src', ':srcset']
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|mp4|svg|webp)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 1000,
              context: './src',
              name: '[path][name].[ext]'
            }
          }
        },

        {
          test: /\.css$/,
          use: [
            mode === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('postcss-import'),
                  postcssPresetEnv({stage: 0})
                ]
              }
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css'
      }),
      new OptimizeCSSAssetsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin([
        {from: 'assets/img/recipes/*.jpg', context: 'src'}, //added to copy recipes files to dist folder
      ])
    ]
  };
};
