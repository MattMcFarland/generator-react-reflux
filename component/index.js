var path = require('path');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.Base.extend({

  initializing: function () {

    this.lodash = require('lodash');
    this.path = path;

    this.argument('componentName', {
      type: String,
      required: true
    });
  },

  writing: {

    javaScript: function () {
      this.fs.copyTpl(
        this.templatePath('component.js'),
        this.destinationPath('app/scripts/components/' + this.componentName + '.js'),
        this
      );
    }

  }
});

module.exports = ComponentGenerator;
