module.exports = function(grunt) {

	grunt.initConfig({ 
		serve: {
			options: {
				port: 9090
			}
		}
		pkg: grunt.file.readJSON('package.json');
		     grunt.loadNpmTasks('grunt-contrib-less');
		     grunt.loadNpmTasks('grunt-contrib-watch');
	            grunt.loadNpmTasks('grunt-serve');
		
	
	});
	

};