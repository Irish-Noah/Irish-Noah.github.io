const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',                    // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),    // Output folder
    filename: 'bundle.js',                    // Output file
    clean: true                               // Clean dist before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,                  // Transpile .js/.jsx with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,                       // Allow importing CSS
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],              // Allow import without extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',               // Use your base HTML
      filename: 'index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,                               // Dev server port
    open: true,                               // Open browser on start
    historyApiFallback: true,                 // Support React Router
  },
  mode: 'development'                         // Switch to 'production' on deploy
};
