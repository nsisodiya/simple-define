module.exports = function(grunt) {
  "use strict";
  // Project configuration.
  var jsFiles = ['Gruntfile.js', 'define.js'];
  var jsbeautifierconfigObject = grunt.file.readJSON('jsbeautifier.json');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        "src": "define.js",
        "dest": "define.min.js"
      }
    },
    jshint: {
      all: jsFiles,
      options: {
        jshintrc: '.jshintrc',
        jshintignore: '.jshintignore'
      }
    },
    jsbeautifier: {
      files: jsFiles,
      options: jsbeautifierconfigObject
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.registerTask('build', ['jsbeautifier', 'jshint', 'uglify']);

};
