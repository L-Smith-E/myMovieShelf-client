import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "blah 1",
      description: "bgfdbdbdbfdb",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
      director: "",
      genre: "",
    },
    {
      id: 2,
      title: "blah 2",
      description: "vfdvdfvdvfdv",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      director: "",
      genre: "",
    },
    {
      id: 3,
      title: "blah 3",
      description: "vfdvdvfdvdfd",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      director: "",
      genre: "",
    },
  ]);

  const [selectedmovie, setSelectedmovie] = useState(null);

  if (selectedmovie) {
    return (
      <movieView
        movie={selectedmovie}
        onBackClick={() => setSelectedmovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <movieCard
          key={movie.id}
          movie={movie}
          onmovieClick={(newSelectedmovie) => {
            setSelectedmovie(newSelectedmovie);
          }}
        />
      ))}
    </div>
  );
};
