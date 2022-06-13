// @ts-check
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @typedef {import('webpack').Configuration} Config
 * @typedef {(env: any, argv: any) => Config} ConfigFactory
 */

/**
 * @type {ConfigFactory}
 */
const configFactory = (_, argv) => {
  const isDevelopMode = argv.mode === "development";
  return {
    entry:  "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    target: ["web", "es6"],
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            { loader: "babel-loader" },
            {
              loader: "@linaria/webpack-loader",
              options: {
                sourceMap: process.env.NODE_ENV !== "production",
              },
            },
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                happyPackMode: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: "css-loader",
              options: {
                sourceMap: process.env.NODE_ENV !== "production",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".ts", ".js", ".tsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "My Template app",
        h1: "Content Header",
        template: "./template/index.html",
        inject: "head",
        hash: true,
        minify: false,
        filename: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    devtool: isDevelopMode ? "inline-source-map" : false,
    performance: {
      hints: isDevelopMode ? false : "warning",
      maxAssetSize: 600000,
      maxEntrypointSize: 600000,
    },
    stats: isDevelopMode
      ? {
          builtAt: true,
          assets: false,
          modules: false,
          entrypoints: false,
          hash: false,
          source: true,
          version: false,
        }
      : "errors-warnings",
  };
};

module.exports = configFactory;
