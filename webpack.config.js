const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // Isso garante que cada bundle tem um nome único baseado no hash do conteúdo
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.docx$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext][query]'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    },
  },
  stats: {
    chunks: true,
    chunkModules: true,
    chunkOrigins: true,
    errorDetails: true,
  },
};
