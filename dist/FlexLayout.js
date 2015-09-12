'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var FlexLayout = _react2['default'].createClass({
  displayName: 'FlexLayout',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      visible: true
    };
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  _getStyle: function _getStyle() {
    return {
      flexBasis: this.props.basis,
      flexGrow: this.props.grow,
      flexShrink: this.props.shrink,
      flex: this.props.flex,
      height: this.props.height,
      width: this.props.width,
      display: this.props.visible ? this.props.noflex ? undefined : "flex" : "none",
      flexDirection: this.props.horizontal || this.props.row ? "row" : this.props.vertical || this.props.column ? "column" : this.props["flex-direction"] ? this.props["flex-direction"] : undefined,
      flexWrap: this.props.wrap ? "wrap" : this.props["wrap-reverse"] ? "wrap-reverse" : undefined,
      justifyContent: this.props["justify-content"] ? this.props["justify-content"] : this.props.primary,
      alignItems: this.props["align-items"] ? this.props["align-items"] : this.props.secondary,
      alignContent: this.props["align-content"] ? this.props["align-content"] : undefined,
      background: this.props.background
    };
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.props.className, style: [this._getStyle(), this.props.style] },
      this.props.children
    );
  }
});

exports['default'] = (0, _radium2['default'])(FlexLayout);
module.exports = exports['default'];