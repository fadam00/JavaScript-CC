//Lecture: Functions

//function calculateAge(yearOfBirth){
//    
//    var age = 2017 - yearOfBirth;
//    return age;
//}
//
//var johnAge = calculateAge(1990);
//var mikeAge = calculateAge(1994);
//var angieAge = calculateAge(1955);
//
//console.log(johnAge);
//
//function yearsUntilRetirement(name, year){
//    var age = calculateAge(year);
//    var retirement = 65 - age;
//if (retirement >= 0) {
//    console.log(name + ' retires in ' + retirement + ' years.');
//} else {
//    console.log(name + ' is already retired.' )
//}
//    
//    
//}
//
//yearsUntilRetirement('John', 1990);
//yearsUntilRetirement('Mike', 1994);
//yearsUntilRetirement('Angie', 1955);

//Lecture: Statements and Expressions
//Expressions: meant to produce a value
//3 + 4;
//var x = 3;
//
////Statements: meant to perform something/do some action
//if (x === 5){
//    //do something
//}

//Lecture: Arrays
//var names = ['John', 'Mike', 'Jane'];
//var years = new Array(1990, 1969, 1948);
//
//console.log(names);
//names[1] = 'Ben';
//console.log(names);
//
//var john = ['John', 'Smith', 1990, false];
//
//john.push('blue'); //add element at the end of array
//john.unshift('Mr.'); //adds element at the beginning of array
//john.pop();//removes last element of array
//john.shift();//removes first element of array
//
//console.log(john)
//
//if(john.indexOf('teacher') === -1)//when using indexOf if the element doesn't exist it returns -1. 
//{
//
//    console.log('John is not a teacher');
//}

//Lecture: Objects
//var john = {
//    name: 'John',
//    lastName: 'Smith',
//    yearOfBirth: 1990,
//    job: 'teacher',
//    isMarried: false
//}
//
////Another way of creating objects
//
//var jane = new Object();
//jane.name = 'Jane';
//jane.lastName = 'Smith';
//jane['yearOfBirth'] = 1956;
//jane['job'] = 'retired';
//jane['isMarried'] = true;
//
//console.log(john.lastName);//one way to retrieve values in object
//console.log(john['lastName']);//another to retrieve values in objects
//
////How to retrieve value of key using variables
//var xyz = 'job';
//console.log(john[xyz]);
//
////How to change(mutate) value of key
//john.lastName = 'Miller';
//john.job = 'programmer';
//
//console.log(jane);

//Lectures: Object Methods
//v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Mark', 'Nina', 'Julie'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;//to retrieve a key/value in the object within a function us this. You do not need an argument when using a value in the object as the argument.
    }
};
*/

/*console.log(john.family[2]);
console.log(john.calculateAge()); //Function within an object, which is called a method

var age = john.calculateAge();
john.age = age;//you can add a key/value to the object like this as well
*/

//v2.0
//A key/value pair is called a property

/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Mark', 'Nina', 'Julie'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
        //with this.age you can automatically store the result of the operation as a property of the object.
    }
};

john.calculateAge();
*/

//Lecture: Loops

//For Loop
/*
for (var i = 0; i < 10; i++){
    
    console.log(i);
    */
}

/*

0, true, print 0, add 1 to i = 1
1, true, print 1, add 1 to i = 2
.
.
.
9, true, print 9, add 1 to i = 10
10, FALSE, end loop!
*/

/*
var names = ['John', 'Jane', 'Mary', 'Bob', 'Mark'];

for (var i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}
*/

//While Loops
var i = 0;
while( i < names.length){
    console.log(names[i]);
    i++;
};



