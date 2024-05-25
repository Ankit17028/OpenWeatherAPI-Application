const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
};

console.log('Running Webpack Config');









// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js', // Updated entry path
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 8080,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.html$/,
//         use: 'html-loader',
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// };








// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       inject: 'body',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// };

// console.log('Webpack Config Loaded');
