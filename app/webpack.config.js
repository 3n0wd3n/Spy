const path = require("path");

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
        test: /\.scss$/, // Jakmile Webpack narazí na SCSS soubor
        use: [
          "style-loader", // Injectuje CSS do HTML
          "css-loader", // Překládá CSS do JS
          "sass-loader", // Kompiluje SCSS do CSS
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Umožňuje sloužit obsah z dist složky
    compress: true, // Zapne kompresi
    port: 9000, // Port na kterém server poběží
    open: true, // Otevře prohlížeč automaticky
  },
  mode: "development", // Vývojový mód
};
