const config = {
  entry: './main.js',

   output: {
    path:'./',
    filename: 'index.js',
   },

   devServer: {
    inline: true,
    port: 80,
    host: '0.0.0.0'
   },

   module: {
     loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
}

module.exports = config
