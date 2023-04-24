const { species, employees } = require('../data/zoo_data');

const employeeCoverage = employees.map((info) => (
  {
    id: info.id,
    fullName: `${info.firstName} ${info.lastName}`,
    species: info.responsibleFor.map((id) => (
      species.find((speId) => (speId.id === id)).name
    )),
    locations: info.responsibleFor.map((id) => (
      species.find((specieLocation) => (specieLocation.id === id)).location
    )),
  }
));

const getEmployeesCoverage = (obj) => {
  const employee = obj && employeeCoverage.find((info) => (
    obj.id ? info.id === obj.id : info.fullName.includes(obj.name)
  ));

  if (employee) {
    return employee;
  }

  if (obj) {
    throw new Error('Informações inválidas');
  }

  return employeeCoverage;
};

module.exports = getEmployeesCoverage;
