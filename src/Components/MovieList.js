
import React from 'react';

import Movie from './Movie';
import classes from './MovieList.module.css';


const MovieList = (props) => {

  const handleDelete = (id) => {
    props.onDelete(id); // Pass the id to the onDelete function provided by the parent component
  };
    return (
      <div className={classes['movies-list']}>
        {props.movies.map((movie) => (
          <div key={movie.id}>
          <Movie
           // id={movie.id}
            title={movie.title}
            releaseDate={movie.releasedate}
            openingText={movie.openingtext}
          />
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </div>
          
        ))}
      </div>
    );
  };
  
  export default MovieList;
  