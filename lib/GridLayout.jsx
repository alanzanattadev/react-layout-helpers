import React from 'react';
import Radium from 'radium';

var GridLayout = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      margin: "5"
    };
  },
  componentDidMount: function() {
    this.setWidth();
  },
  componentWillUnmount: function() {

  },
  setWidth: function() {
    var child = React.findDOMNode(this.refs.child0);
    var container = React.findDOMNode(this.refs.grid);
    if (!child)
      return;
    var boxSize = child.offsetWidth + (parseInt(this.props.margin) * 2);
    var parentSize = container.parentElement.offsetWidth;
    var containerSize = (Math.floor(parentSize / boxSize) * boxSize);
    container.style.width = containerSize + "px";
  },
  render: function() {
    return (
      <div ref="grid" className="grid" style={[{maxWidth: "100%"}, this.props.style]}>
        {React.Children.map(this.props.children, (elem, i) => {
          return React.cloneElement(elem, {ref: "child" + i})
        })}
      </div>
    );
  }
});

export default Radium(GridLayout);
