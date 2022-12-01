const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const svgSprite = require("gulp-svg-sprite");
const image = require("gulp-imagemin");
const babel = require("gulp-babel");
const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
let uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();

const clean = () => {
  return del(["dist"]);
};

const resources = () => {
  return src("src/resources/**").pipe(dest("dist/resources"));
};

const styles = () => {
  return src("src/styles/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: "SCSS Error",
            message: "Error: <%= error.message %>",
          })(err);
          this.emit("end");
        },
      })
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ["last 5 versions"],
      })
    )

    .pipe(sourcemaps.write())
    .pipe(dest("dist/styles"))
    .pipe(browserSync.stream());
};

const stylesBuild = () => {
  return src("src/styles/**/*.scss")
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: "SCSS Error",
            message: "Error: <%= error.message %>",
          })(err);
          this.emit("end");
        },
      })
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ["last 5 versions"],
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest("dist/styles"))
    .pipe(browserSync.stream());
};

const pugTask = () => {
  return src("src/*.pug")
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: "PUG Error",
            message: "Error: <%= error.message %>",
          })(err);
          this.emit("end");
        },
      })
    )
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const pugTaskBuild = () => {
  return src("src/*.pug")
    .pipe(pug({ pretty: false }))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const svgSprites = () => {
  return src("src/images/svg/**/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("dist/images"));
};

const scripts = () => {
  return src(["src/js/components/**/*.js", "src/js/main.js"])
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const scriptsBuild = () => {
  return src(["src/js/components/**/*.js", "src/js/main.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("app.js"))
    .pipe(uglify().on("error", notify.onError()))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const fonts = () => {
  return src(["src/fonts/**"])
    .pipe(dest("dist/fonts"))
    .pipe(browserSync.stream());
};

const images = () => {
  return src([
    "src/images/**/*.jpg",
    "src/images/**/*.jpeg",
    "src/images/**/*.png",
    "src/images/**/*.svg",
  ])
    .pipe(
      image([
        image.mozjpeg({
          quality: 85,
          progressive: true,
        }),
        image.optipng({
          optimizationLevel: 2,
        }),
      ])
    )
    .pipe(dest("dist/images"));
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
};

watch("src/**/*.pug", pugTask);
watch("src/**/*.scss", styles);
watch("src/images/svg/**/*.svg", svgSprites);
watch("src/images/**/*.jpg", images);
watch("src/images/**/*.jpeg", images);
watch("src/images/**/*.png", images);
watch("src/images/**/*.svg", images);
watch("src/js/**/*.js", scripts);
watch("src/resources/**", resources);
watch("src/fonts/**", fonts);

exports.default = series(
  clean,
  resources,
  fonts,
  pugTask,
  scripts,
  styles,
  images,
  svgSprites,
  watchFiles
);

exports.build = series(
  clean,
  resources,
  fonts,
  pugTaskBuild,
  scriptsBuild,
  stylesBuild,
  images,
  svgSprites
);
