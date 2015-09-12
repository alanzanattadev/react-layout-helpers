'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactSwipe = require('react-swipe');

var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

var SliderLayout = _reactAddons2['default'].createClass({
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
    return _reactAddons2['default'].createElement(
      _reactSwipe2['default'],
      { callback: this.props.callback ? this.onSlideChanged : undefined },
      this.props.children
    );
  }
});

exports['default'] = SliderLayout;
module.exports = exports['default'];