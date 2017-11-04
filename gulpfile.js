/*
* GULP FILE PADRÃO
* TASKS:
* AUTORELOAD DAS PAGINAS
* MINIFICAÇÃO DE IMAGEM, CSS, JS
* AUTO PREFIX PARA CSS
*
* COPYRIGHT 2017 - REVELARE
*/

/*
* DEFININDO AS VARIAVEIS UTILIZADAS NO ARQUIVO
*/
var host, autoPrefixBrowserList, concat, gulp, gutil, hostname, path, refresh, sass, uglify, imagemin, cleanCSS, del, browserSync, autoprefixer, shell, sourceMaps, plumber, scripts, styles, rename;

/*
* DEFININDO O NOME DO VIRTUALHOST PARA SER CRIADO AUTOMATICAMENTE
* nomedoprojeto.dev
*/
host = 'battle.dev';

/*
* DEFININDO OS SCRIPTS E OS ARQUIVOS CSS QUE SERÃO UTILIZADOS NO PROJETO
*/
scripts = [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/outdatedbrowser/outdatedbrowser/outdatedbrowser.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'base/scripts/outdated.js',
            'base/scripts/scripts.js'
          ];

styles  = [
            'node_modules/outdatedbrowser/outdatedbrowser/outdatedbrowser.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'base/styles/css/styles.css',
          ];

/*
* DEFININDO QUAIS AS VERSÕES PARA USAR O AUTOPREFIX DO CSS
*/
autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

/*
* CARREGANDO AS DEPENDENCIAS USADAS PELO GULP
*/
gulp         = require('gulp');
gutil        = require('gulp-util');
concat       = require('gulp-concat');
uglify       = require('gulp-uglify');
sass         = require('gulp-sass');
sourceMaps   = require('gulp-sourcemaps');
imagemin     = require('gulp-imagemin');
cleanCSS     = require('gulp-clean-css');
browserSync  = require('browser-sync');
autoprefixer = require('gulp-autoprefixer');
shell        = require('gulp-shell');
plumber      = require('gulp-plumber');
rename       = require('gulp-rename');

/*
* TASK - CRIANDO SERVER DE AUTORELOAD COM BROWSERSYNC
* @PROXY: URL AONDE SEU PROJETO ESTA ALOCADO
*/
gulp.task('browserSync', function() {
    browserSync({
        proxy: host,
        notify: false,
        online: true
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

/*
* TASK - MINIFICANDO O TAMANHO DAS IMAGENS PARA DEPLOY
*/
gulp.task('images', function(tmp) {
    gulp.src(['base/images/*.jpg', 'base/images/*.png'])
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
        .pipe(gulp.dest('assets/images'));
});

/*
* TASK - CONCATENANDO OS SCRIPTS E GERANDO O APP.JS
*/
gulp.task('scripts', function() {
    return gulp.src(scripts)
                .pipe(plumber())
                .pipe(concat('main.js'))
                .on('error', gutil.log)
                .pipe(gulp.dest('assets/scripts'))
                .pipe(rename({suffix: '.min'}))
                .pipe(uglify())
                .pipe(gulp.dest('assets/scripts'));
});

/*
* TASK - COMPILANDO ARQUIVO SASS
*/
gulp.task('sass', function () {
    return gulp.src('base/styles/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('base/styles/css'));
});

/*
* TASK - COMPILANDO O ARQUIVO CSS, COLOCANDO AUTOPREFIX PARA NAVEGADORES ANTIGOS E GERANDO O ARQUIVO STYLES.CSS
*/
gulp.task('styles', function () {
    return gulp.src(styles)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(autoprefixer({
       browsers: autoPrefixBrowserList,
       cascade:  true
    }))
    .on('error', gutil.log)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('assets/styles'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/styles'));
});

/*
* TASK - INSTALA O VIRTUALHOST E DEFINE A URL DO PROJETO
*/
gulp.task('install-project', shell.task([
    'sudo sh virtualhost.sh create '+ host
]));

/*
* TASK PADRÃO PARA RODAR O GULP
* 1) RODA AS FUNÇÕES PARA CONCATENAR OS ARQUIVOS
*/
gulp.task('default', ['sass', 'styles', 'scripts', 'images'], function(){});

/*
* TASK WATCH PARA RODAR O GULP
* 1) INICIA O WEB SERVER E O BROWSERSYNC
* 2) COMPRIME TODOS OS ARQUIVOS E GERA O ARQUIVO FINAL
*/
gulp.task('watch', ['default', 'browserSync'], function () {
    gulp.watch('base/styles/scss/**/*.scss', ['sass']);
    gulp.watch('base/styles/css/*.css', ['styles', 'bs-reload']);
    gulp.watch('base/scripts/*.js', ['scripts', 'bs-reload']);
    gulp.watch(['*.php' , 'assets/views/*.php'], ['bs-reload']);
});
