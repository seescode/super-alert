module.exports = {
    dist: {
        options: {
            sourceMap: true,
            separator: '\n',
        },
        src: [
            'app/dist/unconcated/module.js',
            'app/dist/unconcated/*.js',
            'app/dist/unconcated/**/*.js'
        ],
        dest: 'app/dist/concated/superAlert.js'
    }
};
