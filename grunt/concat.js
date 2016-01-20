module.exports = {
    options: {
        sourceMap: true,
		separator: '\n'        
    },
    dist: {
        src: ['app/dest/js/*.js', 'app/dest/js/**/*.js'],
        dest: 'app/dest/all.js'
    }
};
