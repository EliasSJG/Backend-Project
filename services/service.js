import * as animalData from "../data/data.js";

// Business logic och data transformation
export const getAllAnimals = async () => {
  const animals = await animalData.findAll();

  // Lägg till displayName för presentation
  return animals.map((animal) => ({
    ...animal,
    displayName: `${animal.namn} från ${animal.kontinent}`,
    weightCategory: categorizeWeight(animal.vikt),
  }));
};

export const getAnimalById = async (id) => {
  const animal = await animalData.findById(id);

  if (!animal) {
    return null;
  }

  return {
    ...animal,
    displayName: `${animal.namn} från ${animal.kontinent}`,
    weightCategory: categorizeWeight(animal.vikt),
  };
};

export const getContinentStats = async () => {
  const stats = await animalData.getStatsByContinent();
  const total = stats.reduce((sum, stat) => sum + stat.antal, 0);

  return {
    data: stats,
    total,
    summary: `Animals distributed across ${stats.length} continents`,
  };
};

// Helper function - pure function
const categorizeWeight = (weight) => {
  if (weight < 20) return "Small";
  if (weight < 100) return "Medium";
  if (weight < 500) return "Large";
  return "Huge";
};
