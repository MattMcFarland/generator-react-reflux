var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var RuxGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');

    this.argument('appName', {
      type: String,
      required: false
    });
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to Rux, an opinionated reflux/react generator for enterprise applications!'
    ));

    this.log(chalk.magenta('Out of the box I include ReactJS, React-Router, ReFlux.'));

    var prompts = [{
      name: 'projectName',
      message: 'What is the project\'s name?',
      default: this.appName || path.basename(path.resolve('.'))
    },
    {
      name: 'desc',
      message: 'Enter a brief project description?'
    },
    {
      name: 'author',
      message: 'Who is the author?',
      default: 'Jane Doe'
    },
    {
      name: 'version',
      message: 'What is the project\'s inital version?',
      default: '0.0.0'
    },
    {
      name: 'license',
      message: 'What is the project\'s license?',
      default: 'MIT'
    }];

    this.prompt(prompts, function (props) {

      this.projectName = props.projectName;
      this.desc = props.desc;
      this.author = props.author;
      this.version = props.version;
      this.license = props.license;

      done();
    }.bind(this));
  },

  writing: {

    publicFiles: function () {
      this.fs.copy(
        this.templatePath('public/404.html'),
        this.destinationPath('public/404.html')
      );
      this.fs.copy(
        this.templatePath('public/apple-touch-icon.png'),
        this.destinationPath('public/apple-touch-icon.png')
      );
      this.fs.copy(
        this.templatePath('public/browserconfig.xml'),
        this.destinationPath('public/browserconfig.xml')
      );
      this.fs.copy(
        this.templatePath('public/crossdomain.xml'),
        this.destinationPath('public/crossdomain.xml')
      );
      this.fs.copy(
        this.templatePath('public/favicon.ico'),
        this.destinationPath('public/favicon.ico')
      );
      this.fs.copyTpl(
        this.templatePath('public/humans.txt'),
        this.destinationPath('public/humans.txt'),
        this
      );
      this.fs.copy(
        this.templatePath('public/index.html'),
        this.destinationPath('public/index.html')
      );
      this.fs.copy(
        this.templatePath('public/robots.txt'),
        this.destinationPath('public/robots.txt')
      );
      this.fs.copy(
        this.templatePath('public/tile.png'),
        this.destinationPath('public/tile-wide.png')
      );
    },
    sourceCore: function () {
      this.fs.copy(
        this.templatePath('src/main.js'),
        this.destinationPath('src/main.js')
      );
      this.fs.copy(
        this.templatePath('src/lib/router.js'),
        this.destinationPath('src/lib/router.js')
      );
      this.fs.copy(
        this.templatePath('src/globals/main.less'),
        this.destinationPath('src/globals/main.less')
      );
      this.fs.copy(
        this.templatePath('src/globals/normalize.less'),
        this.destinationPath('src/globals/normalize.less')
      );
    },
    sourceComponents: function () {
      this.fs.copy(
        this.templatePath('src/components/elements/README.md'),
        this.destinationPath('src/components/elements/README.md')
      );
      this.fs.copy(
        this.templatePath('src/components/elements/thumbnail.js'),
        this.destinationPath('src/components/elements/thumbnail.js')
      );
      this.fs.copy(
        this.templatePath('src/components/layouts/basic.js'),
        this.destinationPath('src/components/layouts/basic.js')
      );
      this.fs.copy(
        this.templatePath('src/components/layouts/panel.js'),
        this.destinationPath('src/components/layouts/panel.js')
      );
      this.fs.copy(
        this.templatePath('src/components/layouts/panel.less'),
        this.destinationPath('src/components/layouts/panel.less')
      );
      this.fs.copy(
        this.templatePath('src/components/views/home.js'),
        this.destinationPath('src/components/views/home.js')
      );
      this.fs.copy(
        this.templatePath('src/components/views/home.less'),
        this.destinationPath('src/components/views/home.less')
      );
    },
    gulpTasks: function () {
      this.fs.copy(
        this.templatePath('tasks/bundle.js'),
        this.destinationPath('tasks/bundle.js')
      );
      this.fs.copy(
        this.templatePath('tasks/bundlemin.js'),
        this.destinationPath('tasks/bundlemin.js')
      );
      this.fs.copy(
        this.templatePath('tasks/lint'),
        this.destinationPath('tasks/lint')
      );
      this.fs.copy(
        this.templatePath('tasks/setWatcher'),
        this.destinationPath('tasks/setWatcher')
      );
      this.fs.copy(
        this.templatePath('tasks/gulpCompressionOptions'),
        this.destinationPath('tasks/gulpCompressionOptions')
      );
    },
    projectfiles: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this
      );
    }
  },

  end: function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  }
});

module.exports = RuxGenerator;
