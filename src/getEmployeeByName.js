const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const employessName = employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return employessName;
};

module.exports = getEmployeeByName;
