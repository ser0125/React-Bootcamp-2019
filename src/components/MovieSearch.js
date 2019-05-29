import React from 'react';

class MovieSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    };
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitMovie(this.state.search);
  }

  render () {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input id='movieSearch' value={this.state.search} name='search' placeholder='search' onChange={this.handleChange} />
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

export default MovieSearch;