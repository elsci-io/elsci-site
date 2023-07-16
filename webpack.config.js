const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const {join} = require("path");

module.exports = {
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                'index': { // => target/index.html (key is output filename w/o '.html')
                    import: './src/index.html', // template file
                },
                'business-model': {
                    import: './src/business-model.html',
                },
                'about': {
                    import: './src/about.html',
                },
                'merch': {
                    import: './src/merch.html',
                },
                'peaksel/index': {
                    import: './src/peaksel/html/index.html',
                },
                'peaksel/docs': {
                    import: './src/peaksel/html/docs.html',
                },
                'peaksel/buy': {
                    import: './src/peaksel/html/buy.html',
                },
                'peaksel/docs/add-substance': {
                    import: './src/peaksel/html/docs/add-substance.html',
                },
                'peaksel/docs/align-detectors': {
                    import: './src/peaksel/html/docs/align-detectors.html',
                },
                'peaksel/docs/batch-navigation': {
                    import: './src/peaksel/html/docs/batch-navigation.html',
                },
                'peaksel/docs/import-automation': {
                    import: './src/peaksel/html/docs/import-automation.html',
                },
                'peaksel/docs/import-manual-upload': {
                    import: './src/peaksel/html/docs/import-manual-upload.html',
                },
                'peaksel/docs/peaks': {
                    import: './src/peaksel/html/docs/peaks.html',
                },
                'peaksel/docs/reports': {
                    import: './src/peaksel/html/docs/reports.html',
                },
                'peaksel/docs/vis-templates': {
                    import: './src/peaksel/html/docs/vis-templates.html',
                },
                'peaksel/docs/vocabulary': {
                    import: './src/peaksel/html/docs/vocabulary.html',
                },
                'peaksel/docs/waters-structures': {
                    import: './src/peaksel/html/docs/waters-structures.html',
                },
                'peaksel/docs/zoom': {
                    import: './src/peaksel/html/docs/zoom.html',
                },
                'peaksel/article/hte-qc-peaks': {
                    import: './src/peaksel/html/article/hte-qc-peaks.html',
                },
                'peaksel/article/mass-spec': {
                    import: './src/peaksel/html/article/mass-spec.html',
                },
                'peaksel/article/types-of-uv-detectors': {
                    import: './src/peaksel/html/article/types-of-uv-detectors.html',
                },
                'peaksel/article/wl-extraction': {
                    import: './src/peaksel/html/article/wl-extraction.html',
                },
                'molevent/index': {
                    import: './src/molevent/html/index.html',
                },
                'molevent/buy': {
                    import: './src/molevent/html/buy.html',
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
            loaderOptions: {
                root: join(__dirname, 'src')
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
                test: /\.(ico|png|jp?g|svg|mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[hash:8][ext]',
                },
            },
        ],
    },
    output: {
        path: __dirname + "/target",
        clean: true
    },
    devServer: {
        static: {
            directory: join(__dirname, 'target'),
        },
        watchFiles: {
            paths: ['src/**/*.*'],
            options: {
                usePolling: true,
            },
        },
    },
    performance: {
        hints: false
    },
    mode: 'production'
};