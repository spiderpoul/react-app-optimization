const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;

const path = require("path");
const buildPath = path.resolve(__dirname, "build");
const isDevMode = process.env.NODE_ENV !== 'production'

module.exports = {
  // Entry point for the bundle
  entry: "./index.tsx",
  mode: "development",
  // Output configuration
  output: {
    // Path where the bundle will be generated
    path: buildPath,
    // Filename of the bundle
    filename: "[name].js",
    // Public URL of the bundle
    publicPath: "/",
    clean: true,
  },

  // Configuration for the module loader
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/,
        include: [
          path.resolve("pages"),
          path.resolve("components"),
          path.resolve("app"),
          path.resolve("./index.tsx"),
          path.resolve("../shared"),
        ],
      },
      // CSS files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // SCSS files
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: false,
              },
            },
          },
          "sass-loader",
        ],
      },
      // Image files
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset/resource",
      },
      // SVG files
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "styled-components": require.resolve("styled-components"),
      "react$": require.resolve("react"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: buildPath,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
    }),
    process.env.ANALYZE &&
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    process.env.ANALYZE &&
    new StatoscopeWebpackPlugin(),
  ].filter(Boolean),
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: [
      {
        context: ["/apod"],
        target: "http://localhost:8080",
      },
    ],
  },
};
