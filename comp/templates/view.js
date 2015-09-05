/**
 * @module <%= module %><%= name %>
 * @type <%= type %>
 * @see {@link https://facebook.github.io/react/docs/reusable-components.html React Docs: Re-usable components}
 * @see {@link https://github.com/reflux/refluxjs#using-refluxconnect Reflux Docs: Using Reflux.connect}
 */
var React = require('react');

// Each View is tied to a store, and actions for that store by default.
var store = require('../../stores/<%= name %>Store');
var actions = require('../../actions/<%= name %>Actions');

module.exports = React.createClass({
  // using the connect mixin, see https://github.com/reflux/refluxjs#using-refluxconnect
  // other optional mixins are:
  // Reflux.ListenerMixin         https://github.com/reflux/refluxjs#convenience-mixin-for-react
  // Reflux.listenTo              https://github.com/reflux/refluxjs#using-refluxlistento
  // Reflux.connectFilter         https://github.com/reflux/refluxjs#using-refluxconnectfilter
  //
  // Or usenNo mixin at all - https://github.com/reflux/refluxjs#react-component-example
  mixins: [Reflux.connect(store)],
  displayName: "<%= elementName %>",
  render: function() {
    return (
      <section>
      </section>
    );
  }
});
