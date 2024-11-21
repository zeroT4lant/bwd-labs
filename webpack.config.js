const path = require("path"); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

module.exports = {
  entry: "./src/index.js", // Точка входа для сборки проекта

  output: {
    filename: "bundle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ["style-loader", "css-loader"], // Загрузчики, используемые для обработки CSS-файлов
      },
      {
        test: /\.svg$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about/about.html",
      inject: true,
      chunks: ["index"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/projects/projects.html",
      inject: true,
      chunks: ["index"],
      filename: "projects.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/todoTable/todo.html",
      inject: true,
      chunks: ["index"],
      filename: "todo.html",
    }),
    new HtmlWebpackInlineSVGPlugin(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: "development", // Режим сборки
};