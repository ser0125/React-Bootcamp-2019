import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import './App.css';
import Home from './views/Home';
import MovieForm from './components/MovieForm';
import MovieDetail from './components/MovieDetail';

function authUser() {
  return { isAuth: true };
}

function Routes() {
  const userAuth = authUser();
  return <React.Fragment>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/add" component={MovieForm}></Route>
    <Route path="/movie/:id" component={MovieDetail}></Route>
    <Route exact path="/addAuth" render={
      (props) => <MovieForm {...props} userAuth={userAuth} />}></Route>
  </React.Fragment>
}

function App() {
  return <Router>
    <Link to={{
      pathname: "/add",
      search: "?sort=name",
      state: { name: 'pablo' }
    }}>Home</Link>
    <Link to='/'>Form</Link>
    <Routes />
  </Router>
}

export default App;