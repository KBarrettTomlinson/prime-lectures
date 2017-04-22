module.exports = function(grunt){
  grunt.initConfig({
    // configures the individual packages
    pkg: grunt.file.readJSON('package.json'),
    //uglify minimizes the code
    uglify: {
      build: {
        src: 'client/scripts/*.js',
        dest: 'server/public/scripts/client.min.js'
      }
    },
    // copy copies the files from our CWD to the place of our choosing, likely a public folder used for deployment

    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html'],
        dest: 'server/public/views/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/bootstrap.css',
              'js/bootstrap.js'],
        dest: 'server/public/vendors/bootstrap/'
      },

      // convention tells us to source in all three of the .js file types
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      }
    },
// watch waits to see if a file has been saved, and upon that save it fires off which ever tasks it was assigned
    watch: {
      files: [
        'client/**/*.*'
      ],
      tasks: ['uglify', 'copy']
    }
  });

//lets node know what tasks we are using
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
//tells grunt what to do when we ask grunt to grunt
  grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};
