const path = require("path");
const sass = require("node-sass");

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      js: {
        src: [path.resolve(__dirname, "src", "assets", "js", "*.js")],
        dest: path.resolve(__dirname, "public", "assets", "js", "bundle.js"),
      },
      css: {
        src: [path.resolve(__dirname, "src", "assets", "css", "*.css")],
        dest: path.resolve(__dirname, "public", "assets", "css", "bundle.css"),
      },
    },
    uglify: {
      dist: {
          files: {
            "./public/assets/js/bundle.js":["./public/assets/js/bundle.js"],
            "./public/assets/js/_bundle.js":["./public/assets/js/_bundle.js"],
          }
      }
    },
    babel: {
      options: {
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          "./public/assets/js/bundle.js":["./public/assets/js/bundle.js"],
          "./public/assets/js/_bundle.js":["./public/assets/js/_bundle.js"],
        }
      }
    },
    cssmin: {
      target: {
        files: [
          {
            src: [
              path.resolve(__dirname, "public", "assets", "css", "bundle.css"),
            ],
            dest: path.resolve(
              __dirname,
              "public",
              "assets",
              "css",
              "bundle.css"
            ),
          },
        ],
      },
    },
    ts: {
      default: {
        files: {
          "./public/assets/js/_bundle.js": ["./src/assets/js/*.ts",],
        },
        options: {
          tsconfig: "./tsconfig.json"
        },
      },
    },
    sass: {
      options: {
        implementation: sass,
        outputStyle: "compressed",
      },
      dist: {
        files: {
          "./public/assets/css/_bundle.css": "./src/assets/scss/*.scss",
        },
      },
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: path.resolve(__dirname, "src", "assets", "img"),
            src: ["**/*.{png,jpg,jpeg,gif,svg}"],
            dest: path.resolve(__dirname, "public", "assets", "img"),
          },
        ],
      },
    },
    sync: {
      main: {
        files: [
          {
           cwd: path.resolve(__dirname, "src", "assets", "fonts"), 
           src: ["**/*.{ttf,otf,eot,svg,woff}"], 
           dest: path.resolve(__dirname, "public", "assets", "fonts")
          },
        ],
        updateAndDelete: true,
        failOnError: true,
        compareUsing: "md5"
      }
    },
    watch: {
      scripts: {
        files: [
          path.resolve(__dirname, "src", "assets", "js", "*.js"),
          path.resolve(__dirname, "src", "assets", "js", "*.ts"),
          path.resolve(__dirname, "src", "assets", "css", "*.css"),
          path.resolve(__dirname, "src", "assets", "scss", "*.scss"),
        ],
        tasks: ["ts","concat", "babel", "uglify", "cssmin", "sass"],
        options: {
          spawn: false,
        },
      },
      images: {
        files: [
          path.resolve(
            __dirname,
            "public",
            "assets",
            "img",
            "*.{png,jpg,jpeg,gif,svg}"
          ),
        ],
        tasks: ["imagemin"],
        options: {
          spawn: false,
        },
      },
      fonts: {
        files: [
          path.resolve(
            __dirname, 
            "src", 
            "assets", 
            "fonts", 
            "*.{ttf,otf,eot,svg,woff}"
          ),
        ],
        tasks: ["sync"],
        options: {
           spawn: false,  
        },
      },
    },
  });

  // carregando plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-sync");

  grunt.registerTask("default", [
    "ts",
    "concat",
    "sync",
    "babel",
    "uglify",
    "cssmin",
    "sass",
    "imagemin",
    "watch",
  ]);
};
