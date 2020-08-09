import React from 'react';
//import propTypes from 'prop-types';

class AddTodo extends React.Component {
state = {
  title: '',
  title2: '',
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.addtodo(this.state.title);
  this.setState({title: '', title2: ''})
}
onChange = (e) => this.setState({[e.target.name]: e.target.value})//[e.target.name] is set up this way so we can use onChange for multiple input fields

render () {
  return (
    <div>
      <div className='container'>
      <form onSubmit={this.onSubmit}>
        <input 
          type='text'
          name='title'
          style={{ flex: '10', padding: '5px', }}
          placeholder="add new todo"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type='text'
          name='title2'
          value={this.state.title2}
          onChange={this.onChange}
          placeholder='[e.target.name]: e.target.value'
        />
        <input 
          type='submit'
          value='submit'
          className='btn'
          style={{ flex: '1', }}
        />
      </form>
      </div>
    </div>
  );
}
}

export default AddTodo;
