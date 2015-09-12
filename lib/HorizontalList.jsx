import React from 'react';
import Radium from 'radium';

var HorizontalList = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  render: function() {
    return (
      <li style={[{
        listStyle: "none",
        marginTop: "0px"
      }, this.props.style]}>
        {React.Children.map(this.props.children, (elem, i) => {
          if (elem)
            return (<ul key={"item" + i} style={[{
                      display: "inline-block",
                      paddingLeft: "0px",
                      marginTop: "0px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      marginRight: "10px"
                    }, this.props["elem-style"]]}>{elem}</ul>);
          else
            return false;
        })}
      </li>
    );
  }
});

export default Radium(HorizontalList);
