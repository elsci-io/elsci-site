const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');


// find all html files in src directory and create a new HtmlWebpackPlugin for each one

const files = fs.readdirSync(__dirname + '/src');
const htmlPlugins = files.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/' + file,
        filename: file,
        title: ''
    });
});

const peakselFiles = fs.readdirSync(__dirname + '/src/peaksel/html');
const htmlPluginsForPeaksel = peakselFiles.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/peaksel/html/' + file,
        filename: './peaksel/' + file,
        title: ''
    });
});

const peakselDocsFiles = fs.readdirSync(__dirname + '/src/peaksel/html/docs');
const htmlPluginsForPeakselDocs = peakselDocsFiles.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/peaksel/html/docs/' + file,
        filename: './peaksel/docs/' + file,
        title: ''
    });
});

const peakselArticleFiles = fs.readdirSync(__dirname + '/src/peaksel/html/article');
const htmlPluginsForPeakselArticle = peakselArticleFiles.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/peaksel/html/article/' + file,
        filename: './peaksel/article/' + file,
        title: ''
    });
});

const moleventFiles = fs.readdirSync(__dirname + '/src/molevent');
const htmlPluginsForMolevent = moleventFiles.filter(file => file.endsWith('.html')).map(file => {
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/molevent/' + file,
        filename: './molevent/' + file,
        title: ''
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
        ...htmlPluginsForMolevent,
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