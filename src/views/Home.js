import React from 'react';
import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm.js';

const API_KEY = 'd8862dd490c5a0eee2e11969564ca8e7';

class Home extends React.Component {
  state = {
    moviesData: ''
  }

  addMovie = (movie) => {
    const movies = this.state.moviesData;
    movies.push(movie);
    this.setState({ ...movies})
  }

  deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return  {
        movies
      }
    })
  }

  componentDidMount () {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        moviesData: data.results
      })
    })
  }


    render() {
        let  movies = this.state.moviesData;
        if(movies){
          return <div>
          <h1 className='main-title'>Movie App</h1>
          <MovieForm onSubmit={this.addMovie}/>
          <div className='content'>
            {movies.map((movie, index) => index < 5 ? <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />: null)}
          </div>
        </div>
        }
        return null;
        
    }
}

export default Home