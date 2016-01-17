/**
 * Created by jgluhov on 17/01/16.
 */
module.exports = {
  entry: "./src/app",
  output: {
    filename: "bundle.js",
    publicPath: "/build/",
    path: __dirname + "/build"
  },
  resolve: {
    extensions: ["", ".js", ".ts"]
  },
  watch: true,
  devtool: "inline-source-map",
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts', exclude: /node_modules/}
    ]
  },
  devServer: {
    contentBase: __dirname
  }
};