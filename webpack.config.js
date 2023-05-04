const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let fs = require('fs');


// find all html files in src directory and create a new HtmlWebpackPlugin for each one

let files = fs.readdirSync(__dirname + '/src');
let htmlPlugins = files.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/' + file,
        filename: file,
        title: 'blah-blah'
    });
});

let peakselFiles = fs.readdirSync(__dirname + '/src/peaksel/html');
let htmlPluginsForPeaksel = peakselFiles.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/peaksel/html/' + file,
        filename: './peaksel/' + file,
        title: 'blah-blah'
    });
});

let peakselDocsFiles = fs.readdirSync(__dirname + '/src/peaksel/html/docs');
let htmlPluginsForPeakselDocs = peakselDocsFiles.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/peaksel/html/docs/' + file,
        filename: './peaksel/docs/' + file,
        title: 'blah-blah'
    });
});

let peakselArticleFiles = fs.readdirSync(__dirname + '/src/peaksel/html/article');
let htmlPluginsForPeakselArticle = peakselArticleFiles.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/peaksel/html/article/' + file,
        filename: './peaksel/article/' + file,
        title: 'blah-blah'
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
        ...htmlPluginsForPeaksel,
        ...htmlPluginsForPeakselDocs,
        ...htmlPluginsForPeakselArticle,
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/css', to: 'css' },
                { from: 'src/js', to: 'js' },
                { from: 'src/img', to: 'img' },
                { from: 'src/peaksel/img', to: 'peaksel/img' },
                { from: 'src/peaksel/js', to: 'peaksel/js' },
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