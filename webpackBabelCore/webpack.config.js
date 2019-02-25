const path = require('path');

module.exports = {
    entry: {
        index: './wwwroot/js/src/index.js',
        page2: './wwwroot/js/src/jqueryVersion.js'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/js/dist'),
        filename: '[name].main.js'
    },
    module: {
        rules: [{
            test: /\m?.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};
