module.exports = {
    dist: {
        options: {
            sourceMap: true,
            separator: '\n',
        },
        src: [
            'bower_components/angular/angular.js',
            'dist/module.js',
            'dist/*.js',
            'dist/**/*.js'
        ],
        dest: 'sample/superAlert.js'
    }
};
