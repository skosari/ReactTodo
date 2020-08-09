import React from 'react';

function Header() {
  return(
    <header style={headerStyle}>
      <h1>Siamaks React Based Serverless ToDo List</h1>
    </header>
  )
}

const headerStyle = {
  backgroundColor: 'black',
  color: 'white',
  fontFamily: 'monospace',

}

export default Header;