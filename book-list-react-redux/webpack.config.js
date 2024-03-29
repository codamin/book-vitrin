module.exports = {
    entry: ['./src/index.js'],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'main.js'
    },
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      port:5000,
      historyApiFallback: true,
      contentBase: './',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  };
  