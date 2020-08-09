import React from 'react';
import propTypes from 'prop-types';

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      fontSize: '14pt',
      background: '#f4f4f4',
      margin: '1px',
      borderBottom: '1px #ccc bottom',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    }
  }


  render() {
  
    const {title, id} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          
          <button style={buttonStyle} onClick={this.props.delete.bind(this, id)}>X</button>
          
        </p>
        
      </div>
    );
  }
}

const buttonStyle = {
  background: '#ff0000',
  color: '#fff',
  borderRadius: '50%',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right',
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem;