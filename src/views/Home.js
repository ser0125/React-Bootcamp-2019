import React from 'react';
import MovieCard from '../components/MovieCard'
import MovieForm from '../components/MovieForm.js';
import MovieSearch from '../components/MovieSearch.js';
import axios from 'axios';

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

  searchMovie = (query) => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
      .then(res => {
        axios.get(`https://api.themoviedb.org/3/movie/${res.data.results[0].id}?api_key=${API_KEY}&language=en-US`)
        .then(res => {
          const newMovies = this.state.moviesData;
          const newMovie = {
            id: res.data.id,
            title: res.data.title,
            poster_path: res.data.poster_path,
            overview: res.data.overview,
            genre: [...res.data.genres]
          }
          newMovies.unshift(newMovie);
          this.setState ({
            ...newMovies
          })
        })
     })
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
        moviesData: data.results.slice(0,5)
      })
    })
  }


    render() {
        let  movies = this.state.moviesData;
        if(movies){
          return <div>
          <h1 className='main-title'>Movie App</h1>
          <MovieForm onSubmit={this.addMovie}/>
          <MovieSearch onSubmitMovie={this.searchMovie}/>
          <div className='content'>
            {movies.map((movie, index) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
          </div>
        </div>
        }
        return null;
        
    }
}

export default Home