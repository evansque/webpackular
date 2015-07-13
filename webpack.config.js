path = require('path');
module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")},
            { test: /\.css$/,  loader: 'style!css' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
};