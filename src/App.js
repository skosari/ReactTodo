import React from 'react';
import Todos from './components/todos/Todos';
import './App.css'; //this is the global css file
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Check the mail',
        completed: false,      
      },
      {
        id: 3,
        title: 'Pay the bills',
        completed: false,
      }
    ]
  }  

markComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(x => {
      if(x.id === id){
        x.completed = !x.completed
      } return x;
    })
  })
}

delete = (id) => {
  this.setState({
    todos: [...this.state.todos.filter(x => x.id !== id)]
  });
}

addtodo = (title) => {
  const newTodo = {
    id: (this.state.todos.length + 1),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] })
}

  render() {
    
    return (
      <div className="App">
        <Header />
        <AddTodo addtodo={this.addtodo} />
        
        <Todos 
          todo={this.state.todos} 
          markComplete={this.markComplete} 
          delete={this.delete}
          addtodo={this.addtodo} 
        />


<h1 style={{backgroundColor: 'red'}}>Hello Siamak this is your ToDo app build on legacy react srcipt version 1.1.15</h1>
        
        <p style={liStyle}>Hello from a css variable styled paragraph</p>
      </div>
    );
  }
}

const liStyle = {
  backgroundColor: '#f4f4f4'
}

export default App;//exporting class app as default
