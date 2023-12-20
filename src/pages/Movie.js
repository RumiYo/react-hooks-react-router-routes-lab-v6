import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import NavBar from "../components/NavBar";

function Movie() {

  const [ movieData, setMovieData ] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovieData(data))
    .catch(error => console.error(error))
  },[movieId])

  if(!movieData.genres){
    return <h1>Loading...</h1>
  }

  const { title, time, genres} = movieData

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{title}</h1>
        <p>{time}</p>
        {genres.map( genre => <span>{genre}</span> )}
      </main>
    </>
  );
};

export default Movie;
