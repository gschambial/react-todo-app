import React, { Component } from 'react';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: "Buy some milk"},
      { id: 2, content: "Play Mario"}
    ] 
  } 

  deleteTodo = (id) => {
    console.log('Delete id', id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
    console.log(todo)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <h1 className="center blue-text">
            Todo's 
          </h1>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/todos" render={(props) => <Todos {...props} todos = {this.state.todos} 
                          deleteTodo = {this.deleteTodo} addTodo = {this.addTodo}/>}/>
            <Route path="/:post_id" component={Post} />
          </Switch>              
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
