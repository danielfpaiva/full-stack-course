/**
 * Created by Paiva on 21/12/2017.
 */
var secretNumber = 3;

var stringGuess = prompt('Enter a number');
var guess = Number(stringGuess);

if(guess === secretNumber){
    alert('You got it right!');
} else if (guess > secretNumber){
    alert('Too higher.');
} else {
    alert('Too lower.');
}