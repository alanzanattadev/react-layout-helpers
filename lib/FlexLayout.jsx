import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

var FlexLayout = React.createClass({
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      visible: true
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  _getStyle: function() {
    return {
      flexBasis: this.props.basis,
      flexGrow: this.props.grow,
      flexShrink: this.props.shrink,
      flex: this.props.flex,
      height: this.props.height,
      width: this.props.width,
      display: (this.props.visible ? (this.props.noflex ? undefined : "flex") : "none"),
      flexDirection: (this.props.horizontal || this.props.row ? "row" : (this.props.vertical || this.props.column ? "column" : (this.props["flex-direction"] ? this.props["flex-direction"] : undefined))),
      flexWrap: (this.props.wrap ? "wrap" : (this.props["wrap-reverse"] ? "wrap-reverse" : undefined)),
      justifyContent: (this.props["justify-content"] ? this.props["justify-content"] : this.props.primary),
      alignItems: (this.props["align-items"] ? this.props["align-items"] : this.props.secondary),
      alignContent: (this.props["align-content"] ? this.props["align-content"] : undefined),
      background: this.props.background
    };
  },
  render: function() {
    return (
      <div className={this.props.className} style={[this._getStyle(), this.props.style]}>{this.props.children}</div>
    );
  }
});

export default Radium(FlexLayout);
