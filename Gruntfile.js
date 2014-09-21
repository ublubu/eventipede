module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                immed: true,
                latedef: false,
                laxcomma: true,
                loopfunc: true,
                newcap: true,
                noarg: true,
                onevar: false,
                regexp: true,
                strict: false,
                sub: true,
                trailing: true,
                undef: true,
                yui: true,
                globals: {
                    console: true,
                    require: true,
                    module: true
                },
                node: true,
                ignores: [
                    'build/**/*.js',
                    '**/build/**/*.js',
                    'node_modules/**/*.js',
                    '**/node_modules/**/*.js'
                ]
            },
            all: {
                src: [
                    'examples/**/*.js',
                    'lib/**/*.js',
                    'Gruntfile.js',
                    'index.js'
                ]
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};
