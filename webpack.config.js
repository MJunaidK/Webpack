module.exports = {
    entry: ["./utils.js","./app.js"],
    output: {
        filename: "dist/bundle.js"
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