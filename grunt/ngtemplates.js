module.exports = {
    
    //[NOTE] the module name (atom.superalert) has to be manually updated for each lib
	"atom.superalert": {
		src: 'src/**/*.html',
		dest: 'dist/templates.js',
		options: {
			url: function (url) {                              
				return url.replace(/^src/, '');
			}
		}
    }
};
