module.exports = (grunt) ->
  
  sourceOrigin = 'src/**/*.coffee'
  
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    coffeelint:
      source: ['src/**/*.coffee']
    coffee:
      compile:
        expand: true
        cwd: 'src'
        src: '**/*.coffee'
        dest: 'js/'
        ext: '.js'
    concat:
      dist:
        src: ['js/**/*.js']
        dest: 'dist/<%= pkg.name %>.js'
    uglify:
      options:
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        report: 'gzip'
      dist:
        files:
          'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js'
    dependo:
      targetPath: 'js'
      outputPath: './doc/dependencies'
      format: 'amd'
        

  grunt.loadNpmTasks 'grunt-coffeelint'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-dependo'
  
  grunt.registerTask 'codo', 'Generate Codo documentation', ->
    done = @async()
    
    {exec} = require 'child_process'
    DOCGEN = 'codo'
    DOCOUTPUT = './doc/api'
    
    exec "#{DOCGEN} -o #{DOCOUTPUT} ./src/**/*.coffee", (err, stdout, stderr) ->
      if err
        return grunt.log.writeln stderr
        
      grunt.log.writeln stdout
      done()
  
  grunt.registerTask 'test', 'Lints and unit tests', ['coffeelint']
  grunt.registerTask 'doc', 'Generated documentation', ['dependo', 'codo']
  grunt.registerTask 'default', 'Default task', ['test', 'coffee', 'concat', 'uglify', 'doc']