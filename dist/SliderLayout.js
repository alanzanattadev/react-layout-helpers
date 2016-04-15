'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSwipe = require('react-swipe');

var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

var SliderLayout = _react2['default'].createClass({
  displayName: 'SliderLayout',

  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  onSlideChanged: function onSlideChanged(index) {
    this.props.callback(index);
  },
  render: function render() {
    return _react2['default'].createElement(
      _reactSwipe2['default'],
      { callback: this.props.callback ? this.onSlideChanged : undefined },
      this.props.children
    );
  }
});

exports['default'] = SliderLayout;
module.exports = exports['default'];