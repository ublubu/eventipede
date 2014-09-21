var webpack = require('webpack');

module.exports = {
    entry: './client.js',
    output: {
        path: __dirname + '/build',
        filename: 'client.js'
    },
    module: {
        loaders: []
    },
    plugins: []
};
