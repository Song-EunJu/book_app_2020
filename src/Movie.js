import React from "react";
import PropTypes from "prop-types";

function Movie({title,year,runtime,genres,torrents}){
    return (
        <div className="movie">
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <h5 className="movie_runtime">{runtime}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <ul className="torrents">
                    {torrents.map((torrent, index) => (
                        <li key={index} className="torrent_url">
                            {torrent.url}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    runtime:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    torrents:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Movie;
