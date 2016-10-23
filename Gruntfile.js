module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'scripts/*.js']
        },
        watch: {
            files: ['Gruntfile.js'],
            tasks: ['jshint']
        },
        wiredep: {
            target: {
                src: 'index.html', // point to your HTML file.
                exclude: ['bower_components/bootstrap-css/js/bootstrap.min.js'],
            }
        }
    });
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint','wiredep']);
};