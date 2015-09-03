/**
 * Home
 */
var React = require('react');

require('./home.less');

module.exports = React.createClass({
  displayName: "Home",
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
      <div className="home">
        <h1>'Allo, 'Allo!</h1>
        <p>You now have <strong>Rux</strong></p>
      </div>
    );
  }
});
