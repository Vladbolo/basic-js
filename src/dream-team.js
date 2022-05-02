const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  
let word = [];
if (!Array.isArray(array) || array == ('')) {
return false
}
  for (let i = 0; i < array.length; i++) {

    if (typeof array[i] === "string") {
      word.push(array[i].trim()[0].toUpperCase())
    } 
  }

  return word.sort().join('')
}

console.log(createDreamTeam())

module.exports = {
  createDreamTeam
};
