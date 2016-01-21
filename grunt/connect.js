module.exports = {
    server: {
        options: {
            hostname: 'localhost',            
            //the port we want our localhost to run on
            port: 9001,

            //this matches with the folder in which you want to server
            //your html/js code.
            base: 'sample',

            livereload: '<%= liveReloadPort %>'
        }
    }
};
