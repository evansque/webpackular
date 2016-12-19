var gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  path = require('path'),
  sync = require('run-sequence'),
  serve = require('browser-sync'),
  rename = require('gulp-rename'),
  template = require('gulp-template'),
  yargs = require('yargs').argv,
  modRewrite = require('connect-modrewrite'),
  ngConstant = require('gulp-ng-constant'),
  gutil = require('gulp-util'),
  fs = require('fs'),
  eslint = require('gulp-eslint'),
  reload = function () {
    return serve.reload()
  };


// helper method to resolveToApp paths
var resolveToApp = function (glob) {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

var resolveToComponents = function (glob) {
  glob = glob || '';
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

var root = 'client';

// map of all our paths
var paths = {
  js: resolveToComponents('**/*.js'),
  scss: resolveToApp('**/*.scss'), // our sass files
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

gulp.task('config', function () {
  var configFile = 'client/app/config/' + yargs.env + '.config.json';
  if (yargs.env == undefined) {
    gutil.log(gutil.colors.red('Error ( \'Invalid --env param \' )'));
    return this.emit('error');
  } else {
    fs.exists(configFile, function (exists) {
      if (exists) {
        gulp.src(configFile).pipe(ngConstant({name: 'app.config'})).pipe(rename('app.config.js')).pipe(gulp.dest('client/app/config'));
      } else {
        gutil.log(gutil.colors.red('Error ( \'Environment config file is missing\' )'));
        return this.emit('error');
      }
    });
  }
});

// use our webpack.config.js to 
// build our modules
gulp.task('webpack', ['config'], function () {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

gulp.task('serve', function () {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {
      baseDir: root
    },
    middleware: [
      modRewrite([
        '!\\.\\w+$ /index.html [L]'
      ])
    ]
  });
});

gulp.task('lint', () => {
  return gulp.src(['./client/app/**/*.js','!./client/app/config/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('watch', function () {
  var allPaths = [].concat(
    [paths.js],
    paths.html,
    paths.scss
  );
  gulp.watch(allPaths, ['lint', 'webpack', reload]);
});

gulp.task('component', function () {
  var cap = function (val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var name = yargs.name;
  var parentPath = yargs.parent || '';
  var destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});


gulp.task('default', function (done) {
  sync('lint', 'webpack', 'serve', 'watch', done);
});