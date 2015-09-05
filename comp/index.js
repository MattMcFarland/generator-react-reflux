var generators = require('yeoman-generator'),
  path = require('path');

module.exports = generators.NamedBase.extend({

  constructor: function () {
    generators.NamedBase.apply(this, arguments);

    this.argument('type', {
      desc: "the type of react component: element, partial, layout, or view",
      type: String,
      optional: true
    });

    this.argument('name', {
      desc: "The name of the component.",
      type: String,
      required: true
    });

  },
  prompting: function () {
    var done = this.async(), prompts;
    if (!this.type) {

      prompts = [
        {
          type: 'list',
          name: 'type',
          message: 'Please select a component type:',
          choices: [
            {
              name: 'Element - shared minimal component (thumbnail, icon, text, etc)',
              value: 'element'
            },
            {
              name: 'Partial - shared complex component (widgets, navs, header, footer, etc)',
              value: 'partial'
            },
            {
              name: 'View - stateful component (pages, posts, etc) - adds to a route handler; \n\tcreates new store, new actionsFile',
              value: 'view'
            },
            {
              name: 'Layout - stateless layout (2column, 3column, etc) - adds new route handler',
              value: 'layout'
            }
          ]
        }
      ];

      this.prompt(prompts, function (props) {
        this.type = props.type;
        this.module = 'src/components/' + props.type + 's/';
        done();
      }.bind(this));
    } else {
      this.module = 'src/components/' + this.type + 's/';
      done();
    }
  },
  writing: {

    addComponent: function () {

      var tpl =
        this.type === 'element' ? 'simple.js' :
          this.type === 'partial' ? 'simple.js' :
            this.type === 'view' ? 'view.js' :
              this.type === 'layout' ? 'layout.js' : null;

      this.fs.copyTpl(
        this.templatePath(tpl),
        this.destinationPath(this.module + this.name + '.js'),
        this
      );
    },

    addStyle: function () {
      this.fs.copyTpl(
        this.templatePath('style.less'),
        this.destinationPath(this.module + this.name + '.less'),
        this
      );

    },

    addStore: function () {
      if (this.type === "view") {
        this.fs.copyTpl(
          this.templatePath('store.js'),
          this.destinationPath('src/store/' + this.name + '.Store.js'),
          this
        );
      }
    },

    addActions: function () {
      if (this.type === "view") {
        this.fs.copyTpl(
          this.templatePath('action.js'),
          this.destinationPath('src/actions/' + this.name + 'Actions.js'),
          this
        );
      }
    }


  }

});
