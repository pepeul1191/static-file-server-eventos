var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minify = require("gulp-minify");
var concatCss = require("gulp-concat-css");
var concatJs = require("gulp-concat");
var minifyCss = require("gulp-minify-css");
var replace = require("gulp-replace");
var plumber = require("gulp-plumber");
var watch = require("gulp-watch");
var BASE_URL = "http://localhost:9100/";
var DESTINO = "dist/";
var MEDIA = ""

function errorLog(error){
  console.error.bind(error);
  this.emit("end");
}

gulp.task("fonts", function(){
  gulp.src([
    MEDIA + 'bower_components/font-awesome/fonts/*',
    MEDIA + 'bower_components/bootstrap/fonts/*',
  ])
  .pipe(gulp.dest(DESTINO));
});

gulp.task("login", function(){
  //JS
  //FONTS
  //CSS
  gulp.src([
    MEDIA + "bower_components/bootstrap/dist/css/bootstrap.min.css",
    MEDIA + "bower_components/font-awesome/css/font-awesome.min.css",
    MEDIA + "assets/css/styles.css",
    MEDIA + "assets/css/login.css",
  ])
  .pipe(plumber())
  .pipe(concatCss("login-min.css"))
  .pipe(replace("../../../font-awesome/fonts/", BASE_URL + "dist/"))
  .pipe(replace("../fonts/glyphicons", "glyphicons"))
  .pipe(minifyCss())
  .pipe(gulp.dest(DESTINO));
});

gulp.task("app", function(){
  //JS
  gulp.src([
    MEDIA + "bower_components/jquery/dist/jquery.min.js",
    MEDIA + "bower_components/bootstrap/dist/js/bootstrap.min.js",
    MEDIA + "bower_components/handlebars/handlebars.min.js",
    MEDIA + "bower_components/underscore/underscore-min.js",
    MEDIA + "bower_components/backbone/backbone-min.js",
    MEDIA + "bower_components/backbone.marionette/lib/backbone.marionette.min.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools-core.min.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools.min.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools-interfaces.min.js",
    MEDIA + "bower_components/swp-plugins/assets/js/jquery.upload.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools.chain.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools.dao.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools.autocomplete.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools.form.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools.observer.js",
    MEDIA + "bower_components/swp-plugins/assets/js/mootools.grid.js",
    MEDIA + "bower_components/jquery-ui/ui/widgets/datepicker.js",
    MEDIA + "bower_components/jquery-timepicker-wvega/jquery.timepicker.js",
    MEDIA + "bower_components/ckeditor/ckeditor.js",
    MEDIA + "layouts/app.js",
    MEDIA + "models/evento.js",
    MEDIA + "models/alumno.js",
    MEDIA + "models/empleado.js",
    MEDIA + "models/externo.js",
    MEDIA + "views/_table_evento.js",
    MEDIA + "views/_table_alumno.js",
    MEDIA + "views/_table_empleado.js",
    MEDIA + "views/_table_externo.js",
    MEDIA + "views/alumno.js",
    MEDIA + "views/alumno_detalle.js",
    MEDIA + "views/empleado.js",
    MEDIA + "views/empleado_detalle.js",
    MEDIA + "views/evento.js",
    MEDIA + "views/externo.js",
    MEDIA + "views/externo_detalle.js",
    MEDIA + "views/evento_detalle.js",
    MEDIA + "views/evento_previsualizar.js",
    MEDIA + "routes/app.js",
  ])
  .pipe(concatJs("app.js"))
  .pipe(minify({
      ext:{
        //src:"libs.js",
        //min:"min.js"
      },
      exclude: [],
      ignoreFiles: []
    })
  )
  .pipe(plumber())
  .pipe(gulp.dest(DESTINO));
  //FONTS
  //CSS
  gulp.src([
    MEDIA + "bower_components/bootstrap/dist/css/bootstrap.min.css",
    MEDIA + "bower_components/font-awesome/css/font-awesome.min.css",
    MEDIA + "bower_components/swp-plugins/assets/css/mootools.autocomplete.css",
    MEDIA + "bower_components/swp-plugins/assets/css/mootools.grid.css",
    MEDIA + "bower_components/swp-plugins/assets/css/mootools.validations.css",
    MEDIA + "assets/css/styles.css",
  ])
  .pipe(plumber())
  .pipe(concatCss("app-min.css"))
  .pipe(replace("../../../font-awesome/fonts/", BASE_URL + "dist/"))
  .pipe(replace("../fonts/glyphicons", "glyphicons"))
  .pipe(minifyCss())
  .pipe(gulp.dest(DESTINO));
});
