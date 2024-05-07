import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
import './App.css';

function App() {
  // State variables
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryInterval, setRetryInterval] = useState(null);

  // Function to fetch movies
  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong. Retrying...");
      }
      const data = await response.json();
      const transformedMovies = data.results.map(movieData => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      }));
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
      // Start retrying after 5 seconds
      setRetryInterval(setInterval(fetchMovieHandler, 5000));
    } finally {
      setIsLoading(false);
    }
  }

  // Function to cancel retrying
  function cancelRetry() {
    clearInterval(retryInterval);
    setRetryInterval(null);
  }

  // UseEffect to start fetching movies on initial render without fetch click
  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
        {retryInterval && <button onClick={cancelRetry}>Cancel</button>}
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found..</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;




/*

//using async await
import React,{useState} from 'react';

import MovieList from './Components/MovieList';
import './App.css';

function App() {
  const [Movies,setMovies]=useState([])
  const[isLoading,setisLoading]=useState(false)
  const[error,setError]=useState(null)

 async function fetchmoviehandler(){
        setisLoading(true)
        setError(null)
    try {
      const response=await fetch("https://swapi.dev/api/films/")

      if(!response.ok){
        throw new Error("something went wrong")
      }
  
    const data= await response.json();

    
      const transformedmovies=data.results.map(movieData=>{
        return{
        id:movieData.episode_id,
        title:movieData.title,
        openingText:movieData.opening_crawl,
        releaseDate:movieData.release_date,
      }
      })
     setMovies(transformedmovies)
     //setisLoading(false)

    }catch(error){
       setError(error.message)
    }
    setisLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviehandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading&&Movies.length>0 && <MovieList movies={Movies} />}
       {!isLoading && Movies.length===0 && !error && <p>No movies found..</p>}
       {!isLoading && error && <p>{error}</p>}
 
       {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;



//using promise .then
/*
import React,{useState} from 'react';

import MovieList from './Components/MovieList';
import './App.css';

function App() {
  const [Movies,setMovies]=useState([])
  function fetchmoviehandler(){
    fetch("https://swapi.dev/api/films/").then(response=>{
      return response.json();
    }).then(data=> {
      const transformedmovies=data.results.map(movieData=>{
        return{
        id:movieData.episode_id,
        title:movieData.title,
        openingText:movieData.opening_crawl,
        releaseDate:movieData.release_date,
      }
      })
     setMovies(transformedmovies)
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviehandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={Movies} />
      </section>
    </React.Fragment>
  );
}

export default App;


/*
const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];
  */