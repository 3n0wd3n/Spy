const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Vstupní bod - hlavní JS soubor
  output: {
    filename: "bundle.js", // Název vygenerovaného souboru
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // Cesta k veřejným souborům
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Načítání SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrahuje CSS do souboru
          "css-loader", // Převádí CSS na CommonJS
          "sass-loader", // Převádí SCSS na CSS
        ],
      },
      {
        test: /\.css$/, // Načítání čistého CSS
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/, // Obrázky a SVG
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css", // Vygenerovaný CSS soubor
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"), // Obsahuje dist složku
    compress: true, // Zapne kompresi
    port: 9000, // Port serveru
    open: true, // Automaticky otevře prohlížeč
  },
  mode: "development", // Vývojový mód (změňte na "production" pro produkci)
};
