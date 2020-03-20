import React from 'react';

const MovieItem = (props) => {
    const {movie, removeMovie, addMoviesToWillWatch} = props;
  
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
            <button 
                type="button" 
                className="btn btn-secondary"
                onClick={addMoviesToWillWatch.bind(null, movie)}>
                Will Watch
            </button>
          </div>
        {/* <p>{movie.overview}</p> */}
        </div>
      </div>
    )
}

export default MovieItem;