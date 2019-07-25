import { REQUEST_MOVIES, ERROR_MOVIES } from './actionTypes'
import { RECEIVE_MOVIES } from './actionTypes'
import movies from '../reducers/movies';
import { getMovies } from '../api/movies';

export const requestMovies = () => ({
  type: REQUEST_MOVIES
})

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  payload: movies
});

export const catchMovies = (error) => ({
  type: ERROR_MOVIES,
  payload: error
})

export const fetchMovies = () => (dispatch) => {
  dispatch(requestMovies())
  getMovies()
  .then((movies) => dispatch(receiveMovies(movies)))
  .catch((error) => dispatch(catchMovies(error)))
}