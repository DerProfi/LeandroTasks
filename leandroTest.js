// Average using a for loop
const average = () => {
    const array = [1, 5, 9, 5, 3]
    let total = 0;
    for (let i=0; i < array.length; i++){
        total = total + array[i];
    }
    return total / array.length;
}
console.log(average());


// Look for the smallest number
const calculate = () => {
    const numbers = [4, 2, 5, 3, 6, 1, 4];
    let smallest = numbers[0];
    for (let i=1; i < numbers.length; i++){
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
console.log(calculate());


//Return Key of the biggest number
const test = () => {
  const numbers = {
    A: 5,
    B: 10,
    C: 23,
    D: 8,
    E: 23
  }
  let resultList = [];
  for (const entry of Object.entries(numbers)) {
    if (resultList[0] === undefined) {
      resultList.push(entry);
    } else {
      if (entry[1] > resultList[0][1]) {
          resultList = [entry];
      } else if (entry[1] === resultList[0][1]) {
        resultList.push(entry);
      }
    }
  }
  return resultList;
}
console.log(test());


// Palindrome check
const eingabe = 'Erika feuert nur untreue Fakire'

const numberFour = () => {
    let palindrome = eingabe.replaceAll(' ', '').toLowerCase();
    let back = [];
    for (let i=palindrome.length-1; i >= 0; i-- ) {
        back.push(palindrome[i]);
    }

    if ( back.join('') === palindrome ) {
      console.log('Yes, it is!');
    } else {
      console.log('No it is not!');
    } 
}
numberFour();


// Sum it up
const sum = (number) => {
    total = 0;
    for (let i = 1; i <= number; i++){
        total += i;
    }
    
    console.log(total)

}
sum(4);