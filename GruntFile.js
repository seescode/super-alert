// module.exports = function (grunt) {
//     var liveReloadPort = 11335;
// 
//     // Project configuration.
//     grunt.initConfig({
//     });
// 
//     grunt.loadNpmTasks('grunt-ng-annotate');
//     grunt.loadNpmTasks('grunt-contrib-connect');
//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.loadNpmTasks('grunt-open');
// 
//     // Default task(s).
// };


module.exports = function (grunt) {
	var path = require('path');

	//Load configs
	require('load-grunt-config')(grunt);
    
    grunt.registerTask('build-ui', ['ngAnnotate', 'ngtemplates', 'concat']);
    grunt.registerTask('default', ['build-ui', 'connect', 'open', 'watch']); 
};