const path = require('path');
const nodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_SERVER_JS_DIR = path.resolve(__dirname, 'src/js');

const apiConfig = {
  entry: {
    api: SRC_SERVER_JS_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: false,
    __dirname: false,
    setImmediate: true
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_SERVER_JS_DIR,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: []
}

module.exports = [apiConfig];
