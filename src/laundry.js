/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */
const getMaxPairs = (noOfWashes, cleanPile, dirtyPile) => {
  let pairs = 0;

  cleanPile.sort((a, b) => a - b);
  dirtyPile.sort((a, b) => a - b);
  let unpairedPile = [];

  while (cleanPile.length > 0) {
    if (cleanPile[0] === cleanPile[1]) {
      pairs++;
      cleanPile.splice(0, 2);
    } else {
      unpairedPile.push(cleanPile[0]);
      cleanPile.splice(0, 1);
    }
  }
  console.log(unpairedPile);
  if (noOfWashes > 0) {
    if (unpairedPile.some((item) => dirtyPile.includes(item))) {
      for (element of unpairedPile) {
        if (dirtyPile.length > 0) {
          let index = dirtyPile.indexOf(element);
          dirtyPile.splice(index, 1);
          pairs++;
          noOfWashes--;
        }
      }
    }
    while (dirtyPile.length > 0 && noOfWashes - 2 >= 0) {
      if (dirtyPile[0] === dirtyPile[1]) {
        pairs++;
        noOfWashes -= 2;
        dirtyPile.splice(0, 2);
      } else dirtyPile.splice(0, 1);
    }
  }

  return pairs;
};

module.exports = getMaxPairs;
