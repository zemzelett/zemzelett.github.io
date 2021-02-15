module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		run: {
			build: {
				// cmd: "npm",
				// args: ["run", "build"],
				// https://stackoverflow.com/a/47304117
				exec: "npm run build",
			},
		},
		watch: {
			js: {
				files: ["src/**/*.js"],
				tasks: ["run:build"],
				// options: {
				// 	spawn: false,
				// },
			},
		},
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-run");

	grunt.registerTask("default", ["watch"]);
};
