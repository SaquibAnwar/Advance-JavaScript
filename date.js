
today = new Date();
let birthday = new Date('07-01-1997');
birthday = new Date('07/01/1997');

val = birthday.getDay();
val = today.getFullYear();
val = today.getMonth();
val = today.getDate();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

console.log(val);


const car = ['bmw', 'mercedes', 'toyota', 'volvo'];

car.forEach(function(car){
    console.log(car);
});

// MAP
const users = [
    {id: 1, name : 'Sara'},
    {id: 2, name : 'zxc'},
    {id: 3, name : 'etwd'},
    {id: 4, name : 'Sdsgfsa'},
    {id: 5, name : 'Sam'},
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);


// For IN Loop
user = {
    firstName : 'John',
    lastName : 'Doe',
    age : 36
};

for(let x in user){
    console.log(`${x} : ${user[x]}`); 
}