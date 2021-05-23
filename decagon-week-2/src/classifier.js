/**
 * This is the entry point to the program
 * Question 1 - Classifier
 *
 * @param {any} input Array of student objects
 */

//a function to group in inputs
const groupInput = (arr) => {
  //declaring two empty arrays, one to push recently looped groups, and another to push them all to
  let tempArr = [];
  let result = [];

  //setting the indices to variables
  let a = 0;
  let b = 1;
  let c = 2;

  while (a < arr.length) {
    if (c < arr.length && arr[c].age - arr[a].age <= 5) {
      tempArr.push(arr[a], arr[b], arr[c]);
      result.push(tempArr);
      //clearing up the temporary array to make way for the new set to be looped
      tempArr = [];
      a += 3;
      b += 3;
      c += 3;
    } else if (b < arr.length && arr[b].age - arr[a].age <= 5) {
      tempArr.push(arr[a], arr[b]);
      result.push(tempArr);
      //clearing up the temporary array to make way for the new set to be looped
      tempArr = [];
      a += 2;
      b += 2;
      c += 2;
    } else {
      tempArr.push(arr[a]);
      result.push(tempArr);
      //clearing up the temporary array to make way for the new set to be looped
      tempArr = [];
      a += 1;
      b += 1;
      c += 1;
    }
  }
  return result;
};

const classifier = (input) => {
  let newObj = {};

  if (input.length === 0) {
    return { noOfGroups: 0 };
  }

  // making a deep copy
  let inputCopy = JSON.parse(JSON.stringify(input));

  // getting the ages of each member
  for (let i = 0; i < inputCopy.length; i++) {
    let birthYear = inputCopy[i].dob.slice(0, 4);
    let currentYear = new Date().toString().slice(11, 15);
    let age = currentYear - birthYear;
    inputCopy[i].age = age;
  }

  // sorting based on age
  inputCopy.sort((a, b) => a.age - b.age);

  let inputArr = groupInput(inputCopy);

  // adding a value to object containing total number oof groups
  newObj.noOfGroups = inputArr.length;

  //adding new fields to the object
  for (let i = 0; i < inputArr.length; i++) {
    newObj[`group${i + 1}`] = {};
    let membersArray = inputArr[i];
    newObj[`group${i + 1}`].members = membersArray;
    newObj[`group${i + 1}`].oldest = membersArray[membersArray.length - 1].age;
    newObj[`group${i + 1}`].sum = 0;
    newObj[`group${i + 1}`].regNos = [];

    for (let j = 0; j < membersArray.length; j++) {
      // summing up ages of everyone in a group
      newObj[`group${i + 1}`].sum += membersArray[j].age;

      // convert to number
      newObj[`group${i + 1}`].regNos.push(Number(membersArray[j].regNo));
    }

    // sort the regNos
    newObj[`group${i + 1}`].regNos.sort((a, b) => a - b);
  }

  return newObj;
};

module.exports = classifier;
