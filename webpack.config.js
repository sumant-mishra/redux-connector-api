const config = {
    entry: ['./index.js'],
    optimization: {
      minimize: false
    },
    output: {
      libraryTarget: "umd",
      path: __dirname + '/build',
      filename: 'index.js'
    },
    module: {
        rules: [
            {
              test: /\.js?$/,
              exclude: [ /static/, /node_modules/ ],
              use: [
                {
                  loader: 'babel-loader'
                },
              ],
            }
          ]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      
    ],
    devServer:{
      port: 3000,
      contentBase: __dirname + '/build',
      inline: true
    }
}
module.exports = config;