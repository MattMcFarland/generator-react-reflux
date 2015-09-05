var path      = require('path');
var yeoman    = require('yeoman-generator');
var yosay     = require('yosay');
var chalk     = require('chalk');
var shelljs   = require('shelljs');
var username  = require('username');


var RuxGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');


    this.option('use-sample', {
      desc: 'Use Sample App',
      defaults: true
    });

    this.option('skip-install', {
      desc: 'Skip the bower and node installations',
      defaults: false
    });


    this.argument('appName', {
      type: String,
      required: false
    });
  },

  prompting: function () {
    var done = this.async(),
      prompts, defaultDesc;

    this.gitInfo = {
      name: shelljs.exec('git config user.name', {silent: true}).output.replace(/\n/g, ''),
      email: shelljs.exec('git config user.email', {silent: true}).output.replace(/\n/g, '')
    };

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to Rux, an opinionated reflux/react generator for enterprise applications!'
    ));

    defaultDesc = (this.appName || path.basename(path.resolve('.'))) + ' by ' + this.gitInfo.name;

    this.log(chalk.bold.cyan('Out of the box I include ReactJS, React-Router, ReFlux, and incredible tooling.'));

    prompts = [{
      name: 'projectName',
      message: 'What is the project\'s name?',
      default: this.appName || path.basename(path.resolve('.'))
    },
      {
        name: 'author',
        message: 'Who is the author?',
        default: this.gitInfo.name || username.sync() || ''
      },
      {
        name: 'email',
        message: 'Please enter your email address?',
        default: this.gitInfo.email
      },
      {
        name: 'desc',
        message: 'Please describe your project?',
        default: defaultDesc
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
      },
      {
        type: 'confirm',
        name: 'addDemoSection',
        message: 'Include sample app? (recommended)',
        default: true
      }];

    this.prompt(prompts, function (props) {

      this.projectName    = props.projectName;
      this.desc           = props.desc;
      this.author         = props.author;
      this.email          = props.email;
      this.version        = props.version;
      this.license        = props.license;
      this.addDemoSection = props.addDemoSection;

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
      if (this.addDemoSection) {
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
          this.templatePath('src/components/partials/panel.js'),
          this.destinationPath('src/components/partials/panel.js')
        );
        this.fs.copy(
          this.templatePath('src/components/partials/panel.less'),
          this.destinationPath('src/components/partials/panel.less')
        );
        this.fs.copy(
          this.templatePath('src/components/views/home.js'),
          this.destinationPath('src/components/views/home.js')
        );
        this.fs.copy(
          this.templatePath('src/components/views/home.less'),
          this.destinationPath('src/components/views/home.less')
        );
      }
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
        this.templatePath('tasks/lint.js'),
        this.destinationPath('tasks/lint.js')
      );
      this.fs.copy(
        this.templatePath('tasks/setWatcher.js'),
        this.destinationPath('tasks/setWatcher.js')
      );
      this.fs.copy(
        this.templatePath('tasks/gulpCompressionOptions.js'),
        this.destinationPath('tasks/gulpCompressionOptions.js')
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
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('_bowerrc'),
        this.destinationPath('.bowerrc'),
        this
      );
    }
  },

  end: function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  }
});

module.exports = RuxGenerator;
