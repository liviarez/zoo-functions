const { species } = require('../data/zoo_data');

const getSchedule = (animal) => {
  const findAnimal = species.find((specie) => species.name === animal).availability;
  return findAnimal;
};

module.exports = getSchedule;
