var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('lodash');

var StoreGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.lodash = _;
    this.path = path;

    this.argument('storeName', {
      type: String,
      required: true
    });
  },

  writing: {

    javaScript: function () {

      this.fs.copyTpl(
        this.templatePath('store.js'),
        this.destinationPath('app/scripts/stores/' + path.dirname(this.storeName) + '/' + _.capitalize(path.basename(this.storeName)) + 'Store.js'),
        this
      );

    }
  }
});

module.exports = StoreGenerator;
