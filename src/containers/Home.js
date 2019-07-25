import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestMovies } from '../actions/movies';
import { requestUsers } from '../actions/users';
import { fetchMovies } from '../actions/movies';
import Home from '../views/Home';

const mapStateToProps = (state) => ({
    movies: state.movies,
    users: state.users
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestUsers,
  fetchMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
