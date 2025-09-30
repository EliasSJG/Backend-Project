import * as directorData from "../data/directorData.js";
import { withDisplayName } from "../utils/dry-helper.js";
import * as movieData from "../data/movieData.js";
//director service pratar med min data fil och använder datan och ändrar med att lägga till displayName med hjälp av funktionen från dry-helper.js
export const getAllDirectors = async () => {
  const directors = await directorData.findAll();
  return directors.map((d) => withDisplayName(d, "name", d.birth_year));
};

export const getDirectorById = async (id) => {
  const director = await directorData.findById(id);
  if (!director) return null;
  return withDisplayName(director, "name", director.birth_year);
};

export const getTopDirectorsByAwards = async (count) => {
  const directors = await directorData.findTopByAwards(count);

  const awardDirectors = await Promise.all(
    directors.map(async (d) => {
      const movies = await movieData.findByDirectorId(d.id);
      return {
        id: d.id,
        name: d.name,
        birthYear: d.birth_year,
        awardsWon: d.awards_won,
        totalMovies: movies.length,
        movies: movies.map((m) => ({
          id: m.id,
          title: m.title,
          year: m.release_year,
        })),
      };
    })
  );

  return awardDirectors;
};
