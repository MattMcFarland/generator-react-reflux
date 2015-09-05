var Reflux = require('reflux');

var data = {};

module.exports = Reflux.createStore({

  init: function() {
    console.log('<%= name %>Store initialized');
  }

});
