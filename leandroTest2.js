// 2. Tasks
// Print all pair numbers
const countdown = count => {
    pairNumbers = [];
    const checkEven = count % 2;
    let i;

    if (checkEven === 0) { i = count;}
    else {i = count -1;}

    for (i; i >= 0; i = i -2){
        pairNumbers.push(i);
    };
    console.log(pairNumbers);
}
countdown(8);


//Are all numbers pair?
const one = [2, 4, 6, 8,];
const two = [0, 1, 6, 8];
const three = [10, 8, 9, 0];
const four = [100];
var check = true;

const lookForPairNumbers = array => {
    for (let i=0; i < array.length; i++){
        if (array[i]%2 === 1){
            check = false;
            }
        }
        
        if (check === false) {
            console.log('No, they are not.');
        }
        else
        {console.log('Yes, they are.')
    }
}
lookForPairNumbers(two);


// Print all odd numbers 
const printOdds = a => {
    collect = [];
   for (let i=2; i <= a; i = i+2) {
        collect.push(i);
    }
    if (a % 2 === 1){
    collect.push(a);}

    return collect
}
console.log(printOdds(15));


// Print the triangle 
const triangle = number => {
    const tree = [];
    for (i=1; i <= number; i++){
    tree.push(number);
    console.log(tree.join(' '));}
}
triangle(3);


// Put the triangle upside down
const upsideTriangle = zahl => {
    const tree = [];
    for (let i=0; i <= zahl ; i++){
    tree.push(zahl);
    }
    console.log(tree.join(' '));
    for (let i=0; i <= zahl; i++ ) {
        tree.pop();
        console.log(tree.join(' '));
    }
}
upsideTriangle(5);