var path = require('path');
module.exports = {
    context: path.resolve('js'), //sets the relative root directory for the entry key.
    entry: ["./utils","./app"], 
    output: {
        path: path.resolve('build/js/'), // Tells webpack to put bundle.js into the build directory into the js subdirectory.
        publicPath: '/public/assets/js',  // directory where bundle file will be on webserver,where the bundle.js file is going to be served up from on the web server
        filename: "bundle.js" // contents of build/js are actually going to be requested through the web server from public/assets/js    
                           // Request coming in for /public/assets/js will look for that file inside build/js
    },
    devServer: {
        contentBase: 'public' // Any request from the root are going to come out of public and any request for public/assets/js are serve from build/js
    },
    watch: true,
    module: {
        
        rules: [
            {
                test: /\.es6$/, // WHat kind of files to run through these loader
                exclude: /node_modules/, // exclude node mdules
                loader: "babel-loader"  // name of the loader
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'eslint-loader'

            }
        ]
    },
    
    resolve: {
        extensions: [".js",".es6"]
        //What kind of file type we can process without specifially gving the file extension.
        // weback will look for login.js or login.es6 file
    }
}