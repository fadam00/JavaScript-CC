//Coding Challenge 1

//Height and Age Variables for each participant(Height is in inches)

var timmyAge = 14;
var timmyHeight = 64;

var freddyAge = 15;
var freddyHeight = 60;

var andyAge = 13;
var andyHeight = 75;

var timmyTotal = timmyHeight + (5 * timmyAge);
var freddyTotal = freddyHeight + (5 * freddyAge);
var andyTotal = andyHeight + (5 * andyAge);
 
console.log(timmyTotal);
console.log(freddyTotal);
console.log(andyTotal);

if (timmyTotal < freddyTotal && freddyTotal > andyTotal) {
    console.log('Freddy Wins, by ' + (freddyTotal - timmyTotal - andyTotal)) + '!';
} else if (timmyTotal > freddyTotal && timmyTotal > andyTotal) {
    console.log('Timmy Wins, by ' + (freddyTotal - timmyTotal - andyTotal) + '!');
} else {
    console.log('Andy wins it all');
}