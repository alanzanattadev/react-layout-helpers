import React from 'react';
import ReactSwipe from 'react-swipe';

var SliderLayout = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  onSlideChanged: function(index) {
    this.props.callback(index);
  },
  render: function() {
    return (
      <ReactSwipe callback={this.props.callback ? this.onSlideChanged : undefined}>
        {this.props.children}
      </ReactSwipe>
    );
  }
});

export default SliderLayout;
