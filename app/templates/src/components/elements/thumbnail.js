var React = require('react');

module.exports = React.createClass({
  displayName: "Thumbnail",
  propTypes: {
    src: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    clickHandler: React.PropTypes.func
  },
  render: function() {

    return (
      <div className="thumbnail">
        {this.props.clickHandler ?
          <a href="#" onClick={this.props.clickHandler} <img src={this.props.src}/></a> :
          <img src={this.props.src}/>
        }
        {this.props.caption ? '<p>{{this.props.caption}}</p>' : ''}
      </div>
    );
  }
});
