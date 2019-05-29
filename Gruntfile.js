module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "css/styles.css": "less/styles.less"
          }
        }
      },
      cssmin: {
        minify: {
          src: 'css/styles.css',
          dest: 'css/styles.min.css'
        }
      },
      watch: {
        styles: {
          files: ['less/**/*.less'],
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['less','cssmin','watch']);
  
  };