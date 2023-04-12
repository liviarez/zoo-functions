const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const especies = species.filter((specie) => ids.includes(specie.id));
  console.log(especies);
  return especies;
};

module.exports = getSpeciesByIds;
