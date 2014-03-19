module.exports = function (grunt) {
  grunt.initConfig({
    shell: {
      run_file:{
        command: 'sh ./bash.sh',
        options: {
            stdout: true
        }
      }
    },
    watch: {
      run_file: {
        files: ["./watchme/*"],
        tasks: ["shell:run_file"]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
};
