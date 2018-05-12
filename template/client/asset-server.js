const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config/webpack.dev.js');

const listen_addr = 'localhost';
const listen_port = 8001;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    headers: {"Access-Control-Allow-Origin": "*"},
    historyApiFallback: true
}).listen(listen_port, listen_addr, function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at ' + listen_addr + ':' + listen_port);
});