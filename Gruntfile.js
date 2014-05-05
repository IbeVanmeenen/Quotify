module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            sass: {
                files: ['./scss/**/*.scss'],
                tasks: ['sass']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    './css/quotify-default.css': './scss/themes/quotify-default.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'watch']);
};
