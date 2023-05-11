const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                'index': { // => dist/index.html (key is output filename w/o '.html')
                    import: './src/index.html', // template file
                },
                'business-model': { // => dist/index.html (key is output filename w/o '.html')
                    import: './src/business-model.html', // template file
                },
                'about': { // => dist/index.html (key is output filename w/o '.html')
                    import: './src/about.html', // template file
                },
                'peaksel/index': {
                    import: './src/peaksel/html/index.html', // template file
                },
                'peaksel/docs': {
                    import: './src/peaksel/html/docs.html', // template file
                },
                'peaksel/buy': {
                    import: './src/html/peaksel/buy.html', // template file
                },
                'peaksel/docs/add-substance': {
                    import: './src/peaksel/html/docs/add-substance.html', // template file
                },
                'peaksel/docs/align-detectors': {
                    import: './src/peaksel/html/docs/align-detectors.html', // template file
                },
                'peakseldocs/batch-navigation': {
                    import: './src/peaksel//html/docs/batch-navigation.html', // template file
                },
                'peaksel/docs/import-automation': {
                    import: './src/peaksel/html/docs/import-automation.html', // template file
                },
                'peaksel/docs/import-manual-upload': {
                    import: './src/peaksel/html/docs/import-manual-upload.html', // template file
                },
                'peaksel/docs/peaks': {
                    import: './src/peaksel/html/docs/peaks.html', // template file
                },
                'peaksel/docs/reports': {
                    import: './src/peaksel/html/docs/reports.html', // template file
                },
                'peaksel/docs/vis-templates': {
                    import: './src/peaksel/html/docs/vis-templates.html', // template file
                },
                'peaksel/docs/vocabulary': {
                    import: './src/peaksel/html/docs/vocabulary.html', // template file
                },
                'peaksel/docs/waters-structures': {
                    import: './src/peaksel/html/docs/waters-structures.html', // template file
                },
                'peaksel/docs/zoom': {
                    import: './src/peaksel/html/docs/zoom.html', // template file
                },
                'peaksel/article/hte-qc-peaks': {
                    import: './src/peaksel/html/article/hte-qc-peaks.html', // template file
                },
                'peaksel/article/mass-spec': {
                    import: './src/peaksel/html/article/mass-spec.html', // template file
                },
                'peaksel/article/wl-extraction': {
                    import: './src/peaksel/html/article/wl-extraction.html', // template file
                },
                'molevent/index': {
                    import: './src/molevent/html/index.html', // template file
                },
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