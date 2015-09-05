var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

require('./<%= name %>.less');

module.exports = React.createClass({
  displayName: "<%= name %",
  render: function() {

    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

