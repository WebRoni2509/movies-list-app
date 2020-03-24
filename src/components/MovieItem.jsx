import React from 'react';

class MovieItem extends React.Component {
  constructor(){
    super()
    this.state = {
      willWatch: false
    }
  }
  render(){
      const {movie, /*removeMovie,*/ addMoviesToWillWatch, removeMovieFromWillWatch} = this.props;
      return(    
          <div className="card">
              {/* <button 
                  className="btn btn-primary" 
                  onClick={removeMovie.bind(this, movie)}>
                  Delete Movie
              </button> */}
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
            alt=""
          />
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Rating: {movie.vote_average}</p>
              <div className="add-to-watchlist">
              {this.state.willWatch === true ? (
                <div className="remove-fav">
                  <i className="fa fa-thumbs-up"
                    onClick={()=> {
                      this.setState({
                        willWatch: false
                      });
                      removeMovieFromWillWatch(movie)}}>
                  </i>
                  <span className='add-to-fav-tooltip'>Remove from favorites</span>  
                </div>
              ):( 
                <div className="add-fav">
                  <i className="fa fa-thumbs-o-up"
                    onClick={() => {
                      this.setState({
                        willWatch: true
                      });
                      addMoviesToWillWatch(movie)}}>
                  </i>
                  <span className='add-to-fav-tooltip'>Add to favorites</span>
                </div>
              )}
              </div>
            </div>
          {/* <p>{movie.overview}</p> */}
          </div>
        </div>
      )
  }
}


export default MovieItem;