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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/, // Pravidlo pro obrázky a SVG
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // Vygeneruje unikátní název souboru
              outputPath: "images/", // Cesta, kam se soubory uloží
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Umožňuje sloučit obsah z dist složky
    compress: true, // Zapne kompresi
    port: 9000, // Port na kterém server poběží
    open: true, // Otevře prohlížeč automaticky
  },
  mode: "development", // Vývojový mód
};
