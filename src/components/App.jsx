import React from 'react';
// import moviesDa  ta from '../moviesData';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';
import {API_URL, API_KEY_3} from '../utils/api';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      movies: [],
      moviesWillWatch: []
    } 
  }

  componentDidMount() {
    const _this = this;
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=popularity.desc`).then((response) => {
      
      return response.json()
    }).then(function(data){
      _this.setState({
        movies: data.results
      })
    })
  }

  removeMovie = movie =>{
    const updateMovies = this.state.movies.filter(function(item){
      return item.id !== movie.id;
    })
    this.setState({
      movies: updateMovies
    })
  }

  addMoviesToWillWatch = movie => {
    const updateMoviesToWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMoviesToWillWatch
    })
  }

  removeMovieFromWillWatch = movie =>{
    const updateMoviesToWillWatch = this.state.moviesWillWatch.filter(function(item){
      return item.id !== movie.id;
    })
    this.setState({
      moviesWillWatch: updateMoviesToWillWatch
    })
  }

  render() {
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>   
                    <MovieItem 
                    movie={movie} 
                    // removeMovie={this.removeMovie}
                    addMoviesToWillWatch={this.addMoviesToWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-3">
            <div className="will-watch-box">
              <h3 className="favorites-title">Will Watch: {this.state.moviesWillWatch.length}</h3>
              <ul className="list-group">
                {this.state.moviesWillWatch.map(movie => 
                  <li key={movie.id} className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <span>{movie.title}</span>  
                      <span><strong>{movie.vote_average}</strong></span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
