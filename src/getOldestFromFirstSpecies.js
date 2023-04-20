const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (employeeId) => {
  const employee = employees.find((emp) => emp.id === employeeId);
  const firstSpeciesId = employee.responsibleFor[0];
  const firstSpecies = species.find((spec) => spec.id === firstSpeciesId);
  const sortedAnimalsResidents = firstSpecies.residents.sort((a, b) => {
    if (b.age > a.age) {
      return 1;
    }
    return -1;
  });
  return Object.values(sortedAnimalsResidents[0]);
};
module.exports = getOldestFromFirstSpecies;
