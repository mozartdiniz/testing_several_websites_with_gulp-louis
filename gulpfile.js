"use strict";

const gulp = require('gulp');
const louis = require('gulp-louis');

gulp.task('louis', function() {

  const urls = ['http://www.youtube.com', 'http://www.google.com', 'http://www.twitter.com'];

  let luisDefaults = {
    timeout: 60,
    url: '',
    viewport: '1280x1024',
    engine: 'webkit',
    userAgent: 'Chrome/37.0.2062.120',
    noExternals: false,
    performanceBudget: {
      cssSize: 200,
      jsSize: 2000,
      consoleMessages: 0,
      imageSize: 5000,
      domContentLoaded: 2000,
      smallestLatency: 1000
    }
  };

  urls.forEach((item) => {
    luisDefaults.url = item;
    louis(luisDefaults);
  });

});

gulp.task('default', ['louis']);
