module.exports = {
    
    //[NOTE] the module name (atom.superalert) has to be manually updated for each lib
	"atom.superalert": {
		src: 'app/src/**/*.html',
		dest: 'app/dist/unconcated/templates.js',
		options: {
			url: function (url) {                              
				return url.replace(/^app\/src/, '');
			}
		}
    }
};
