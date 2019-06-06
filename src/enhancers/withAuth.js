import React from 'react';

const WithAuth = (WrappedComponent) => 
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentUser: window.localStorage.getItem('username')
      }
    }

    render () {
      const data = {
        ...this.props,
        isAuth: (this.state.currentUser === 'Leonardo')
      }
      return <WrappedComponent {...data} />
    }
  }

export default WithAuth;