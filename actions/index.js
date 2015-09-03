var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('lodash');

var ActionsGenerator = yeoman.generators.Base.extend({

  initializing: function () {
    this.lodash = _;
    this.path = path;

    this.argument('actionsName', {
      type: String,
      required: true
    });
  },

  writing: {

    javaScript: function () {

      this.fs.copyTpl(
        this.templatePath('actions.js'),
        this.destinationPath('app/scripts/actions/' + path.dirname(this.actionsName) + '/' + _.capitalize(path.basename(this.actionsName)) + 'Actions.js'),
        this
      );

    }
  }
});

module.exports = ActionsGenerator;
