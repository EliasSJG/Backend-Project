import * as movieData from "../data/movieData.js";

export const getAllMovies = async () => {
  const movies = await movieData.findAll();
  return movies.map((m) => ({
    ...m,
    displayName: `${m.title} (${m.release_year})`,
  }));
};

export const getMovieById = async (id) => {
  const movie = await movieData.findById(id);
  if (!movie) return null;
  return {
    ...movie,
    displayName: `${movie.title} (${movie.release_year})`,
  };
};

export const getMoviesByDirector = async (directorId) => {
  const movies = await movieData.findByDirectorId(directorId);
  return movies.map((m) => ({
    ...m,
    displayName: `${m.title} (${m.release_year})`,
  }));
};
