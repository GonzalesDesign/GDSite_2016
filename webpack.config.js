
module.exports = {
  entry: './js/gdSite2016.js',
  output: {
    path: __dirname,
    filename: './gdSite2016Bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!'
      }
    ]
  }
};
