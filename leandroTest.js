// Average using a for loop
const average = () => {
    let array = [1, 5, 9, 5, 3]
    let total = 0;
    for (let i=0; i < array.length; i++){
        total = total + array[i];
    }
    return total / array.length;
}
console.log(average());


// Look for the smallest number
const calculate = () => {
    let numbers = [4, 2, 5, 3, 6, 1, 4];
    let smallest = numbers[0];
    for (let i=0; i < numbers.length; i++){
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
console.log(calculate());


//Return Key of the biggest number
const test = () => {
let numbers = {
    A: 5,
    B: 10,
    C: 23,
    D: 8
  }
    let biggest = 0;
for (const [key, value] of Object.entries(numbers)) {
    if (value > biggest){
        biggest = value;
    }
}
for (const [key, value] of Object.entries(numbers)) {
    if (value === biggest){
        return key
    }
}
}
console.log(test());



// Palindrome check
const eingabe = 'Erika feuert nur untreue Fakire'

const numberFour = () =>{
    let palindrome = eingabe.replace(/ /g, '');
    let split = palindrome.length/2
    let back = [];
    let forth= [];
for (let i=0; i< split; i++ ){
    forth.push(palindrome[i]);
}
for (let i=palindrome.length-1; i > split-1; i-- ){
    back.push(palindrome[i]);
}

let checkback = back.join('').toLowerCase();
let checkforth = forth.join('').toLocaleLowerCase();

if ( checkback === checkforth ) {
    
    console.log('Yes, it is!');
} else {
    console.log('No it is not!');
} 
}
numberFour();


// Sum it up
const sum = (number) => {
    points = [];
    for (let i = 0; i < number; i++){
        points[i] = i +1
    }
    let summe =  points.reduce((a, b) => a+b);
    
    console.log(summe)

}
sum(4);


