var birthYear = 2016 - 26

 birthYear = 2016 - 26 * 2

console.log(birthYear);

//Lecture: If/Else Statements

var name = "John";
var age = 26;
var isMarried = "yes";

if (isMarried === 'yes') {
    console.log(name + " is married!");
} else {
    console.log(name + " will hopefully marry soon :)");
    
}

//Lecture: boolean logic and switch

var age = 25;

if (age === 20) {
    alert('John is a teenager');
} else if (age >= 20 && age < 30) {
    alert('John is young ass DUDE');
} else {
    alert('John is a man.')
}

var job = 'teacher';

job = prompt('What does John do?');

switch(job) {
    case 'teacher':
        alert('John teaches kids.');
        break;
    case 'driver':
        alert('John drives a cab.');
        break;
    case 'cop':
        alert('John is a cop');
        break;
          }