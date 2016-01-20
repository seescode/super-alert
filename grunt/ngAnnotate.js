module.exports = {
    options: {
        singleQuotes: true
    },
    app: {
        files: [{
            expand: true,
            src: ['app/src/*.js', 'app/src/**/*.js'],
            rename: function (dest, src) {
                return src.replace("app/src", "app/dist/unconcated");
            }
        }]
    }
};
