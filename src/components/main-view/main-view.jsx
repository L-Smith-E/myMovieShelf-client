import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
      director: "Christopher Nolan",
      genre: "Sci-Fi",
    },
    {
      id: 2,
      title: "Sinners",
      description:
        "Twin brothers return home to discover an even greater evil waiting.",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      director: "Ryan Coogler",
      genre: "Horror",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "Batman faces the Joker in a battle for Gotham's soul.",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      director: "Christopher Nolan",
      genre: "Action",
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
