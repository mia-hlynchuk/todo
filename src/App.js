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
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentWillMount() {
    // check if there is anything in the localStorage
    if (localStorage.todo_tasks) {
      this.setState({
        items: JSON.parse(localStorage.todo_tasks) 
      });
    }
  }

  componentDidUpdate() {
    // update the localStorage accordingly 
    localStorage.setItem("todo_tasks", JSON.stringify(this.state.items));
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

  deleteItem(key) {
    var items = this.state.items.filter(item => item.key !== key);
    this.setState({ items });
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
            this.state.items.map((item) => ( 
              <Item key={item.key} text={item.text} onDelete={() => this.deleteItem(item.key)}/> 
            ))
          }
        </ul>  
      </div>
    );
  }
}

export default App;