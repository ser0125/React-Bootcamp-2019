import React from 'react';
import MovieCard from '../components/MovieCard';
import MovieSearch from '../components/MovieSearch.js';
import MainLayout from '../layouts/MainLayout.js';
import axios from 'axios';
import { API_KEY } from '../data/const';


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
            genres: [...res.data.genres]
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
          return (
          <MainLayout>
          <MovieSearch onSubmitMovie={this.searchMovie}/>
          {movies.map((movie, index) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
          </MainLayout>
          )
        }
        return null;
        
    }
}

export default Home