import React from 'react';

class MovieCard extends React.Component {
  state = {
    checked: false,
  }

  handleCheck = () => {
    this.setState((state, props) => ({
      checked: !state.checked
    }), () => console.log('favourite added'))
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get state from props')
    if(props.genre === "horror") {
      return {
        checked: true,
      }
    }
    return null
  }

  shouldComponentUpdate () {
    //Remember to return true or false
    return true
  }


  componentDidMount () {
    //console.log(this.state)
  }

  componentDidUpdate (prevProps, prevState) {
    //console.log(this.state)
  }

  componentWillUnmount() {
    console.log('I will unmount')
  }
  
  render() {
    let genresSpecific = null;
    const { id, title, year, poster_path, overview, deleteMovie, genres } = this.props
    if(genres) {
       genresSpecific = genres.map((genre,index) => <span key={index} style={{margin:'10px', border:'1px solid white'}}>{genre.name}</span>)
    }
    return <div className='movie-container'>   
        <div className='favourite-container'>
            <button onClick={this.handleCheck} className='favourite-button'>
                <span className={`fa fa-star favourite-star ${this.state.checked ? 'checked': ''}`}></span>
            </button>
            <button onClick={() => deleteMovie(id)} className='close-button'>
              <i className="fa fa-close"></i>
            </button>
        </div>
      <h1>{title}</h1>
      <div>{year}</div>
      <div className='overview-container'>
        <img className='overview-img' src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt='Movie' />
        <p>{overview}</p>
      </div>
      {genresSpecific}
    </div>
    }
}

MovieCard.defaultProps = {
  genre: 'comedia',
}

export default MovieCard