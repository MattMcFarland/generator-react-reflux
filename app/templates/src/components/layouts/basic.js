var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

require('./basic.less');

module.exports = React.createClass({
  displayName: "Basic",
  render: function() {

    return (
      <div className="app">
        <RouteHandler />
      </div>
    );
  }
});

