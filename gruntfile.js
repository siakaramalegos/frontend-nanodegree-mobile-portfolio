module.exports = function(grunt){

    // Configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')

        // Concatenate files configuration
        concat: {
          // code here
        }

        // Minify files configuration
    });

    // Concatenate files
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Minify CSS
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Minify JS
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['concat'] );

};