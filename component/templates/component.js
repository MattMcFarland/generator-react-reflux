var React = require('react');

require('./<%= path.basename(componentName) %>.less');

module.exports = React.createClass({
  displayName: "<%= lodash.capitalize(path.basename(componentName)) %>",
  propTypes: {
    someprop: React.PropTypes.string
  },
  getInitialState: function () {

  },
  componentDidMount: function () {

  },
  componentWillUnmount: function () {

  },
  componentWillUpdate: function () {

  },
  componentDidUpdate: function () {

  },
  render: function() {

    return (
      <div className="<%= path.basename(componentName) %>">
        <p someprop="hello">Your content</p>
      </div>
    );
  }
});
