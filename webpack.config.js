const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

let fs = require('fs');


// find all html files in src directory and create a new HtmlWebpackPlugin for each one

let files = fs.readdirSync(__dirname + '/src');
let htmlPlugins = files.filter(file => file.endsWith('.html')).map(file => {
    console.log(file);
    return new HtmlWebpackPlugin({
        template: __dirname + '/src/' + file,
        filename: file
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
        // new HtmlWebpackPlugin({
        //     template: __dirname + '/src/peaksel/docs.html',
        //     filename: '/peaksel/docs.html'
        // }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/css', to: 'css' },
                { from: 'src/js', to: 'js' },
                { from: 'src/img', to: 'img' },
                // { from: 'src/peaksel/article', to: 'peaksel/article' },
                // { from: 'src/peaksel/doc', to: 'peaksel/doc' },
                // { from: 'src/peaksel/js', to: 'peaksel/js' },
                // { from: 'src/peaksel/img', to: 'peaksel/img' },
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