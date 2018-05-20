const ExtractTextPlugin = require("extract-text-webpack-plugin");
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    webpack: (config, { build, dev, isServer, defaultLoaders }) => {
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            }
            ,
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            }
        )
        return config
    },
    webpackDevMiddleware: config => {
        return config
    }
})