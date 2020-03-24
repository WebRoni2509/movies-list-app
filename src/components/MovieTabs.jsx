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
                className={`nav-link ${sort_by === 'revenue.desc' ? 'active': ''}`}
                onClick={handleClick('revenue.desc')}
                >
                Revenue
                </a>
            </li>
            <li className="nav-item text-white">
                <a href="#"
                className={`nav-link ${sort_by === 'vote_count.desc' ? 'active': ''}`}
                onClick={handleClick('vote_count.desc')}
                >
                Vote Count
                </a>
            </li>   
        </ul>
    )
}

export default MovieTabs;