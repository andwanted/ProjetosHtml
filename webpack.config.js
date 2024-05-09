const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // Usando contenthash para evitar conflitos e cache
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.docx$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash][ext][query]' // Usando hash para garantir nomes únicos
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
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      name: (module, chunks, cacheGroupKey) => {
        return `${cacheGroupKey}-${chunks.reduce((acc, chunk) => acc + chunk.name, '')}`;
      },
    },
  },
  stats: {
    chunks: true,
    chunkModules: true,
    chunkOrigins: true,
    errorDetails: true,
  },
};
