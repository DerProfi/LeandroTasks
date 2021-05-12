
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Stripe.

// Write a function to flatten a nested dictionary. Namespace the keys with a period.

// For example, given the following dictionary:

let example1 = {
  "key": 3,
  "foo": {
      "a": 5,
      "bar": {
          "baz": 8
      }
  }
};

//
const normalizeObject = (obj) => {

  // This is out result object
  let result = {};

  // This iterates through all keys in the first level
  for (let key in obj) {

    // We check if there are objects in the second level and normalize the object there
    if (typeof obj[key] === 'object') {
      const newFlatObj = normalizeObject(obj[key]);

      // Once the normalized objects are returned, we get the keys there to the root object
      for (let secondKeys in newFlatObj) {
        result[key + '.' + secondKeys] = newFlatObj[secondKeys];
      }
    }else{
      result[key] = obj[key];
    }

  }

  return result;
};

let finalResult = normalizeObject(example1);
console.log(finalResult);

// Expected result of the given example:
// let result = {
//   "key": 3,
//   "foo.a": 5,
//   "foo.bar.baz": 8
// };