const { employees } = require('../data/zoo_data');

const isManager = (id) =>
  employees.some((employee) => employee.managers.includes(id));
// console.log(employees);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerTest = employees.filter((employee) => employee.managers.includes(managerId));

  const resultName = managerTest.map((employee) => `${employee.firstName} ${employee.lastName}`);
  return resultName;
};
module.exports = { isManager, getRelatedEmployees };
