module.exports = {
    options: {
        //grunt watch already has live reload built in.  
        //Here we are enabling it.
        livereload: 11335
    },
    code: {
        //list all the files to watch for changes.
        files: ['index.html', 'src/*.*', 'src/**/*.*'],
        tasks: ['build-ui']
    }
};
