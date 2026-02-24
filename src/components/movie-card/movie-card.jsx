export const MovieCard = ({ movie, onmovieClick }) => {
  return (
    <div
      onClick={() => {
        onmovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};
