export const movieCard = ({ movie, onmovieClick }) => {
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
