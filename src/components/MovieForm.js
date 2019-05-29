import React from 'react';

class MovieForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      year: '',
      image: '',
      genre: '',
      overview: ''
    };
    this.yearRef = React.createRef();
  }

  handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  componentDidMount () {
  }

  render () {
    return <form className='form' onSubmit={this.handleSubmit}>
      <input id='movieID' value={this.state.id} name='id' placeholder='id' onChange={this.handleChange} />
      <input value={this.state.title} name='title' placeholder='title' onChange={this.handleChange} />
      <input ref={this.yearRef} value={this.state.year} name='year' placeholder='year' onChange={this.handleChange} />
      <input value={this.state.image} name='image' placeholder='image' onChange={this.handleChange} />
      <input value={this.state.genre} name='genre' placeholder='genre' onChange={this.handleChange} />
      <input value={this.state.overview} name='overview' placeholder='overview' onChange={this.handleChange} />
      <input type="submit" value="Save"/>
    </form>

  }
}

export default MovieForm;
