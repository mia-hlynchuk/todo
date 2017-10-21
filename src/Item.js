import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.text);
    return (
      <li> {this.props.text} </li>
    );
  }
}

export default Item;