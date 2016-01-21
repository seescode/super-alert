module.exports = {
    options: {
        singleQuotes: true
    },
    app: {
        files: [{
            expand: true,
            src: ['src/*.js', 'src/**/*.js'],
            rename: function (dest, src) {
                return src.replace("src", "dist");
            }
        }]
    }
};
