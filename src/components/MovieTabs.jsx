import React from 'react';

const MovieTabs = (props) => {
    const {sort_by, updateSortBy} = props;
    const handleClick = value => {
        return event => {
            updateSortBy(value)
        }
    }
    return(
        <ul className="nav nav-pills ">
            <li className="nav-item text-white" >
                <a href="#"
                className={`nav-link ${sort_by === 'popularity.desc' ? 'active': ''}`}
                onClick={handleClick('popularity.desc')}
                >   
                Popular
                </a>
            </li>
            <li className="nav-item text-white">
                <a href="#"
                className={`nav-link ${sort_by === 'vote_average.desc' ? 'active': ''}`}
                onClick={handleClick('vote_average.desc')}
                >
                
                Vote Average
                </a>
            </li>
            <li className="nav-item text-white">
                <a href="#"
                className={`nav-link ${sort_by === 'release_date.desc' ? 'active': ''}`}
                onClick={handleClick('release_date.desc')}
                >
                
                Release Date
                </a>
            </li>   
        </ul>
    )
}

export default MovieTabs;