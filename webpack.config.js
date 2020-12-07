const path = require('path');


/* 
        Ai nevoie de aceste module pentru ca 'webpack' sa functioneze:

    "brotli-webpack-plugin": "^1.1.0",
    "html-webpack-plugin": "^4.5.0",
    "webpack": "^5.4.0",
    "webpack-cli": "^4.2.0"
*/

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