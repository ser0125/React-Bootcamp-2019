import React from 'react';
import axios from 'axios';
import { API_KEY } from '../data/const';


class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      image: '',
      genre: '',
      overview: ''
    };
  }
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        this.setState({
          title: res.data.title,
          year: res.data.release_date,
          poster_path: res.data.poster_path,
          genres: [...res.data.genres],
          overview: res.data.overview
        })
      });
  }
  render() {
    return <div className="detail-container"> 
    <div className='movie-detail-container'>
      <h1>{this.state.title}</h1>
      <div>{this.state.year}</div>
      <div className='overview-container'>
        <img className='overview-img' src={`https://image.tmdb.org/t/p/w1280${this.state.poster_path}`} alt='Movie' />
        <p>{this.state.overview}</p>
      </div>
      {
        this.state.genres ? this.state.genres.map((genre) =>
          <span key={genre.id} className='badges'>{genre.name}</span>) : null
      }
    </div>
    </div>
  }
}

export default MovieDetail;