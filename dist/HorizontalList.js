'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var HorizontalList = _react2['default'].createClass({
  displayName: 'HorizontalList',

  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  componentWillUnmount: function componentWillUnmount() {},
  render: function render() {
    var _this = this;

    return _react2['default'].createElement(
      'li',
      { style: [{
          listStyle: "none",
          marginTop: "0px"
        }, this.props.style] },
      _react2['default'].Children.map(this.props.children, function (elem, i) {
        if (elem) return _react2['default'].createElement(
          'ul',
          { key: "item" + i, style: [{
              display: "inline-block",
              paddingLeft: "0px",
              marginTop: "0px",
              marginBottom: "10px",
              marginLeft: "10px",
              marginRight: "10px"
            }, _this.props["elem-style"]] },
          elem
        );else return false;
      })
    );
  }
});

exports['default'] = (0, _radium2['default'])(HorizontalList);
module.exports = exports['default'];