const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findEmployee = employees.find((employee) => employees.id === id).responsibleFor[0];
  const findAnimal = species.find((specie) => species.id === findEmployee).residents;
  console.log(findAnimal);
};

module.exports = getOldestFromFirstSpecies;
