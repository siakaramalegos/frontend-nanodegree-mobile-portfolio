module.exports = function(grunt){

    // Configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Concatenate files configuration
        concat: {
            build: {
                src: [
                    'views/css/bootstrap-grid.css',
                    'views/css/style.css'
                ],
                dest: 'views/css/concat.css'
            }
        },

        // Minify files configuration
        uglify: {
            build: {
                src: 'js/perfmatters.js',
                dest: 'js/production.min.js'
            }
        },

        minify: {
            build: {
                src: 'views/css/concat.css',
                dest: 'views/css/production.css'
            }
        }
    });

    // Concatenate files
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Minify CSS
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Minify JS
    grunt.loadNpmTasks('grunt-contrib-uglify')

    // TODO: add CSS minify
    grunt.registerTask('default', ['concat', 'uglify'] );

};