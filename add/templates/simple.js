/**
 * @module <%= module %><%= name %>
 * @type <%= type %>
 * @see {@link https://facebook.github.io/react/docs/reusable-components.html React Docs: Re-usable components}
 */
var React = require('react');

require('./<%= name %>.less');

module.exports = React.createClass({
  // The displayName string is used in debugging messages.
  displayName: "<%= name %>",
  /*
   * As your app grows it's helpful to ensure that your components are used correctly.
   * We do this by allowing you to specify propTypes. React.PropTypes exports a range of validators that
   * can be used to make sure the data you receive is valid.
   * https://facebook.github.io/react/docs/reusable-components.html#prop-validation
   */
  propTypes: {
    type: React.PropTypes.string,
    children: React.PropTypes.node
  },
  getDefaultProps: function() {
    return {
      type: '<%= type %>'
    };
  },
  /*
   * The statics object allows you to define static methods that can be called on the component class
   * https://facebook.github.io/react/docs/component-specs.html#statics
   */
  statics: {

  },
  /*
   * A common type of React component is one that extends a basic HTML element in a simple way.
   * You can use the JSX spread syntax to copy props {...this.props}
   */
  render: function() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
});
