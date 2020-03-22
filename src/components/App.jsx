import React from 'react';
import moviesData from '../moviesData';
import MovieItem from './MovieItem';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    } 
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
            <h3 className="favorites-title">Will Watch: {this.state.moviesWillWatch.length}</h3>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => 
                <li className="list-group-item">{movie.title}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
