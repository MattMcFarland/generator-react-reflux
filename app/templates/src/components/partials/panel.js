var React = require('react');

require('panel.less');

module.exports = React.createClass({
  displayName: "Panel",
  propTypes: {
    header: React.PropTypes.any,
    children: React.PropTypes.any,
    footer: React.PropTypes.any,
    type: React.PropTypes.string
  },
  render: function() {
    return (
      <div className={"panel panel-" + type}>
        <header className="panel-header">{this.props.header}</header>
        <div className="panel-body">
          {this.props.children}
        </div>
        <footer className="panel-footer">{this.props.footer}</footer>
      </div>
    );
  }
});
