const array = [12,56,98,74,99,63,45];
const array2 = new Array(89,47,6,64,82,43,21);
const fruits = ['apple', 'mango', 'banana'];
const mixed = ['apple', 22, {a: 1, b: 2}, null, undefined, true];

let val;

console.log(mixed);

val = Array.isArray(numbers);

array.length;
val = array.indexOf(99);

// //Adding numbers at back
// array.push(250);
// //Adding numbers at front
// array.unshift(75);
// //Deleting numbers from back
// array.pop();
// //Deleting numbers from front
// array.shift();
// //Splice values
// array.splice(1, 3);
// //concat
// val = array.concat(array2);

// val = fruits.sort();
// val = array2.sort();

// // sorting function
// val = array2.sort(function(x, y){
//     return x-y;
// });

// // reverse sort
// val = array2.sort(function(x, y){
//     return y-x;
// });


//Find 
function under50(num){
    return num < 50;
}

val = array2.find(under50);

console.log("\n" + array);
console.log(val);
