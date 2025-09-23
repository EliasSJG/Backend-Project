import * as directorData from "../data/data.js";

export const getAllDirectors = async () => {
  const directors = await directorData.findAll();

  return directors.map((d) => ({
    ...d,
    displayName: `${d.name} (${d.birth_year})`,
  }));
};

export const getDirectorById = async (id) => {
  const director = await directorData.findById(id);
  if (!director) return null;

  return {
    ...director,
    displayName: `${director.name} (${director.birth_year})`,
  };
};
