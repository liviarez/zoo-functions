const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  const getSpeciesByName = (name) => species
    .find((specie) => specie.name === name);
  const countAllAnimals = () => species
    .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});

  if (!animal) {
    return countAllAnimals();
  }

  const [animalName, animalSex] = Object.values(animal);

  if (!animalSex) {
    return getSpeciesByName(animalName).residents.length;
  }

  const animals = getSpeciesByName(animalName).residents.filter((res) => res.sex === animalSex);

  return animals.length;
};

module.exports = countAnimals;
