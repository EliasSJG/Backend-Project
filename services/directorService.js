import * as directorData from "../data/directorData.js";
import { withDisplayName } from "../utils/dry-helper.js";

export const getAllDirectors = async () => {
  const directors = await directorData.findAll();
  return directors.map((d) => withDisplayName(d, "name", d.birth_year));
};

export const getDirectorById = async (id) => {
  const director = await directorData.findById(id);
  if (!director) return null;
  return withDisplayName(director, "name", director.birth_year);
};

export const getTopDirectorsByMovies = async (count) => {
  const directors = await directorData.findTopByMovies(count);
  return directors.map((d) =>
    withDisplayName(d, "name", `${d.total_movies} movies`)
  );
};

export const getTopDirectorsByAwards = async (count) => {
  const directors = await directorData.findTopByAwards(count);
  return directors.map((d) =>
    withDisplayName(d, "name", `${d.awards_won} awards`)
  );
};
