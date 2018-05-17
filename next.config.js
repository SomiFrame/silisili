const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = (phase, { defaultConfig }) => {
    return {
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
    }
}