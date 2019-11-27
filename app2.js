const name = "John";
const age = 36;
const job = "Web Developer";
const city = "Boston";
let html;



html = '<h3> Without String Literals (ES5) </h3>' +  
        '<ul>' +
        '<li> Name : ' + name + '</li>' + 
        '<li> Age : ' + age + '</li>' + 
        '<li> Job : ' + job + '</li>' + 
        '<li> City : ' + city + '</li>' + 
        '</ul>';

document.body.innerHTML += html;

html1 = `
    <h3> With String Literals (ES6) </h3>
    <ul>
        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
    </ul>
`

document.body.innerHTML = html1;