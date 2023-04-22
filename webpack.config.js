const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let fs = require('fs');

const header = fs.readFileSync(__dirname + '/src/header.html');
const footer = fs.readFileSync(__dirname + '/src/footer.html');

// find all html files in src directory and create a new HtmlWebpackPlugin for each one

let files = fs.readdirSync(__dirname + '/src');
let htmlPlugins = files.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/' + file,
        filename: file,
        header: header,
        footer: footer
    });
});

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        ...htmlPlugins,
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/css', to: 'css' },
                { from: 'src/js', to: 'js' },
                { from: 'src/images', to: 'images' },
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader',
                    ]
            },
        ]
    },
    devServer: {
        static: './dist',
        hot: true,
        host: 'localhost',
        port: 3457
    }
};