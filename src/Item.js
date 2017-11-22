import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.checkOrUncheck = this.checkOrUncheck.bind(this);
    this.delete = this.delete.bind(this);
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

  delete(key) {    
    this.props.onDelete(key);
  }

  render() {
    return (
      <li className={this.state.checked ? 'checked' : null}> 
        <label><input type="checkbox" onChange={this.checkOrUncheck}/>{this.props.text}</label>
        <button className="delete" onClick={this.delete}>x</button>
      </li>
    );
  }
}

export default Item;