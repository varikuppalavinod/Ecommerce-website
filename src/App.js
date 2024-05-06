//using async await
import React,{useState} from 'react';

import MovieList from './Components/MovieList';
import './App.css';

function App() {
  const [Movies,setMovies]=useState([])
  const[isLoading,setisLoading]=useState(false)

 async function fetchmoviehandler(){
        setisLoading(true)
 const response=await fetch("https://swapi.dev/api/films/")
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
     setisLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviehandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading&&Movies.length>0 && <MovieList movies={Movies} />}
       {!isLoading && Movies.length===0 &&<p>No movies found..</p>}
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