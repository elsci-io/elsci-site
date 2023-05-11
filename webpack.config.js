const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                'index': { // => dist/index.html (key is output filename w/o '.html')
                    import: './src/index.html', // template file
                }
                // 'peaksel/index': {
                //     import: './src/peaksel/index.html', // template file
                // }
            },
            js: {
                // output filename of JS extracted from source script specified in `<script>`
                filename: './js/[name].[contenthash:8].js',
            },
            css: {
                // output filename of CSS extracted from source file specified in `<link>`
                filename: './css/[name].[contenthash:8].css',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.(ico|png|jp?g|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[hash:8][ext][query]',
                },
            },
        ],
    },
    output: {
        path: __dirname + "/target"
    },
    devServer: {
        static: './target',
        hot: true,
        host: 'localhost',
        port: 3457
    }
};