const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const animalFinder = species.find((specie) => specie.name === animal).residents;
  return animalFinder.every((chosenAnimal) => chosenAnimal.age >= age);
};

module.exports = getAnimalsOlderThan;
