import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();

    var itemsArray = this.state.items;

    itemsArray.push({
      text: this.inputEle.value,
      key: Date.now()
    });

    this.setState({
      items: itemsArray
    });

    this.inputEle.value = "";
  }

  render() {
    return (
      <div className="todoApp">
        <h1>----- To Do -----</h1>
        <div className="task-input">
          <form onSubmit={this.addItem}>
              <input type="text"
                  placeholder="Enter Task"
                  ref={(el) => { this.inputEle = el; }} />
              <button type="submit">Add</button>
          </form>
        </div>   
        <ul className="list">
          {
            this.state.items.map((item) => ( <Item key={item.key} text={item.text}/> ))
          }
        </ul>  
      </div>
    );
  }
}

export default App;