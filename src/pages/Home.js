import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [moviesData, setMoviesData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setMoviesData(data))
    .catch(error => console.log(error))
  },[])

  const movieList = moviesData.map( movie => {
    return <MovieCard key={movie.id} title={movie.title} id={movie.id}/>
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
