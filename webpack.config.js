module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // webpackの出力をデバッグするためのsourcemapsを有効化
    devtool: "source-map",

    resolve: {
        // 解決可能な拡張子に'.ts'と'.tsx'を追加
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // .tsまたは.tsxのすべてのファイルを、awesome-typescript-loaderで扱う
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // .jsのすべてのファイルに、source-map-loaderによるあらかじめ処理されたsourcemapsを持たせる
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // インポートモジュールがグローバル変数を利用するように設定
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};