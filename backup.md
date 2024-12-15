# WEBPACK.CONFIG.JS

## TOHLE ŘEŠENÍ MI FUNGUJE NA TESTOVÁNÍ PRO LOKAL

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

    // run in terminal
    cd app
    npm start

## TOHLE ŘEŠENÍ FUNGUJE PRO VERCEL

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
