'use strict';

var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var browserSync = require( 'browser-sync' );

gulp.task( 'serve', function () {
	browserSync( {
		notify: false,
		port: 9000,
		server: {
			baseDir: [ '.' ]
		},
		files: [
			'index.html',
			'slides/*',
			'assets/**/*'
		],
		ui: false
	} );
} );

gulp.task( 'deploy', function () {
	return gulp.src( [
		'index.html',
		'slides/*',
		'assets/asciicast/**/*',
		'assets/fonts/**/*',
		'assets/images/**/*',
		'assets/scripts/**/*',
		'assets/styles/*.css',
		'assets/styles/theme/*.css',
		'assets/styles/print/*.css'
	], {
		base: '.'
	} )
		.pipe( $.ghPages() );
} );

gulp.task( 'default', gulp.parallel( 'serve' ) );
