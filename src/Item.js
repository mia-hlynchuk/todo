import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.checkOrUncheck = this.checkOrUncheck.bind(this);
  }

  checkOrUncheck() {
    // check if the item is already checked or not
    if(this.state.checked) {
      this.setState({
        checked: false
      });
    } else {
      this.setState({
        checked: true
      });
    }
  }

  render() {
    console.log(this.props.text);
    return (
      <li className={this.state.checked ? 'checked' : null}> 
        <label><input type="checkbox" onChange={this.checkOrUncheck}/>{this.props.text}</label>
      </li>
    );
  }
}

export default Item;