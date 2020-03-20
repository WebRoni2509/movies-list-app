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
    const updateMoviesToWillWatch = [...this.state.moviesWillWatch];
    updateMoviesToWillWatch.push(movie)

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
                  <div className="col-6 mb-4" key={movie.id}>   
                    <MovieItem 
                    movie={movie} 
                    removeMovie={this.removeMovie}
                    addMoviesToWillWatch={this.addMoviesToWillWatch}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
