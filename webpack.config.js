const path = require('path');

module.exports = {
	entry: './Auxiliar/Webpack/Example.js',
    output: {
        path: __dirname + '/Auxiliar/Webpack',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'Auxiliar'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        cacheDirectory: true,
                    }
                }
            },
            {
                test: /\.css$/i,
                loader: 'style-loader'
            },
            {
				test: /\.css$/i,
				loader: 'css-loader',
				options: {
					modules: {
							auto: true,
							localIdentName: '[local]__[name]--[hash:base64:5]'
					}
				}
            },
        ],
    },
    optimization: {
        minimize: true
    },
    plugins: [
    ]
}