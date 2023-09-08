const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); // хранит относительные пути для каждого из файлов, помогает отрисовывать пути до наших файлов
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  const config = {
    devtool: isProduction ? "hidden-nosources-source-map" : "source-map", //This option controls if and how source maps are generated.
    entry: ["./src/index.js", "./styles/style.css"], // место где лежит наш js
    output: {
      path: path.join(__dirname, "/dist"), // __dirname — это переменная, которая указывает абсолютный путь к каталогу, содержащему текущий исполняемый файл.
      filename: "script.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/, // регулярка что проверяются только файлы js
          exclude: /node_modules/, // ненужно включать в сборку
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"], // массив тк несколько лоадеров для стилей / мини добавляет отдельный файл, стайл-лоадер- инлайн стили прописывает
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: "./.env.local",
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
  };
  return config;
};
