const path = require("path");
module.exports = {


    entry: {
        "accountService/accountService": "./src/accountService/handler"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "lambdaBuilds"),
        libraryTarget: "umd"
    },
    mode: 'development',
    target: 'node'
};
