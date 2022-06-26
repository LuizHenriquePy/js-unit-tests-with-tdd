/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let count = 2; count <= 3; count += 1) {
      myArray.push(count);
    }
  }
  return myArray;
};

module.exports = myCounter;
