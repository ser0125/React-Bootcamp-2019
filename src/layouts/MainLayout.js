import React from 'react';

const MainLayout = (props) => {
  return (
    <div>
      <h1 className='main-title'>Movie App</h1>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}

export default MainLayout;