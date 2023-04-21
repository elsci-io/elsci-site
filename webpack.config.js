// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const path = require('path');
// const fs = require('fs');

// const header = fs.readFileSync(__dirname + '/src/header.html');
// const footer = fs.readFileSync(__dirname + '/src/footer.html');

// function getHtmlFiles(targetDir) {
//     return fs.readdirSync(targetDir).filter(file => file.endsWith('.html'));
// }

// function createHtmlWebpackPlugin(dirPath, filename) {
//     return new HtmlWebpackPlugin({
//         template: dirPath + '/' + filename,
//         header: header,
//         footer: footer
//     });
// }

// const PATHS = {
//     elsciSrc: path.resolve(__dirname + '/src'),
//     elsciDist: path.resolve(__dirname + '/dist'),
// }

// const elsciConfig = {
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: PATHS.elsciDist
//     },
//     plugins: [
//         ...getHtmlFiles(PATHS.elsciSrc).map(htmlFile => createHtmlWebpackPlugin(PATHS.elsciSrc, htmlFile)),
//         new CopyWebpackPlugin({
//             patterns: [
//                 { from: 'src/css', to: 'css' },
//                 { from: 'src/js', to: 'js' },
//                 { from: 'src/images', to: 'images' },
//             ]
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             }
//         ]
//     },
//     devServer: {
//         static: './dist',
//         hot: true,
//         host: 'localhost',
//         port: 3457
//     }
// };

// const peakselConfig = {}
// const moleventConfig = {}
// const crystalineConfig = {}

// // module.exports = {
// //     entry: {
// //         "": './src/index.js',
// //         "peaksel":
// //     }
// // };

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
                { from: 'src/peaksel', to: 'peaksel' }
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