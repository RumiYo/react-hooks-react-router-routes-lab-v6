import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {

  const [ directorsData, setDirectorsData ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectorsData(data))
  },[])

  const directorsList = directorsData.map(director => {
    return (
      <article id={director.id} key={director.id} >
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li> )}
      </ul>
    </article>
    )})

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
