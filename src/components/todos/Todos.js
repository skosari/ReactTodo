import React from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends React.Component {
  
  
  render() {
    return this.props.todo.map((todo) => 
      (<TodoItem 
        key={todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete} 
        delete={this.props.delete} 
        
      />
      )
    );
  }
}

Todos.propTypes = {
  todo: propTypes.array.isRequired
}

export default Todos
