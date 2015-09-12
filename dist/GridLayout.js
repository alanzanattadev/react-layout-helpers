'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var GridLayout = _react2['default'].createClass({
  displayName: 'GridLayout',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      margin: "5"
    };
  },
  componentDidMount: function componentDidMount() {
    this.setWidth();
  },
  componentWillUnmount: function componentWillUnmount() {},
  setWidth: function setWidth() {
    var child = _react2['default'].findDOMNode(this.refs.child0);
    var container = _react2['default'].findDOMNode(this.refs.grid);
    if (!child) return;
    var boxSize = child.offsetWidth + parseInt(this.props.margin) * 2;
    var parentSize = container.parentElement.offsetWidth;
    var containerSize = Math.floor(parentSize / boxSize) * boxSize;
    container.style.width = containerSize + "px";
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { ref: 'grid', className: 'grid', style: [{ maxWidth: "100%" }, this.props.style] },
      _react2['default'].Children.map(this.props.children, function (elem, i) {
        return _react2['default'].cloneElement(elem, { ref: "child" + i });
      })
    );
  }
});

exports['default'] = (0, _radium2['default'])(GridLayout);
module.exports = exports['default'];