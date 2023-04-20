const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) =>
  entrants.reduce(
    (accumulator, entrant) => {
      if (entrant.age <= 12) {
        accumulator.child += 1;
      } else if (entrant.age >= 18 && entrant.age < 50) {
        accumulator.adult += 1;
      } else {
        accumulator.senior += 1;
      }
      return {
        child: accumulator.child,
        adult: accumulator.adult,
        senior: accumulator.senior,
      };
    },
    { child: 0, adult: 0, senior: 0 },
  );

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const totalPriceChild = countEntrants(entrants).child * prices.child;
  const totalPriceAdult = countEntrants(entrants).adult * prices.adult;
  const totalPriceSenior = countEntrants(entrants).senior * prices.senior;
  console.log(totalPriceSenior + totalPriceAdult + totalPriceChild);
  return totalPriceAdult + totalPriceChild + totalPriceSenior;
};

module.exports = { calculateEntry, countEntrants };
