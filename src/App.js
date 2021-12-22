import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";
import Filtre from "./components/Filtre";
import Header from "./components/Header";
import { moviedata } from "./Data.js";
import Movieslist from "./components/Movieslist";

function App() {
  const [movies, setMovies] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (rate) => {
    setRate(rate);
  };
  const handleAdd = (newMovie) => {
    setMovies([...movies,newMovie])
  }
  
  return (
    <div className="App">
      <Header handleAdd={handleAdd}/>
      <Filtre
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
      />
      <Movieslist
        movies={movies.filter(
          (elt) =>
            elt.title
              .trim()
              .toUpperCase()
              .includes(title.trim().toUpperCase()) && elt.rate >= rate
        )}
      />
      
    </div>
  );
}

export default App;
