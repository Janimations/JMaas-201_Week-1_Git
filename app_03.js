// Codefellows-201 March 2016
// JMaas Week1-day-3 Wednesday Lab Assignment:
// JMaas Week1-day-4 Thursday Lab Assignment:

// this function ensures that the html-page is fully loaded before the pop-up windows start:
//window.onload() = function() {

// declare variables for textContent-functions below:
var question_1 = document.getElementById('question_1');
var question_2 = document.getElementById('question_2');
var question_3 = document.getElementById('question_3');
var question_4 = document.getElementById('question_4');
var question_5 = document.getElementById('question_5');

var correctTotal = 0;                       // counter variable for total right answers


// Question 00:  Introduction and Name

var userName = prompt('Welcome to the PINGU GUESSING GAME! Have a look around - when You are ready to take the Quiz enter Your name to start:');

console.log('Welcome message prompt - User asked to enter name');
console.log('The user said there name is: <<<< ' + userName + ' >>>>');

alert('Hello ' + userName + ', This Guessing game will be fun! Please click "ok" to go ahead, then answer the first question.');

// Question 01:  Made with CG-Animation? // puppets or CG answer, check for first letter

var keepAsking_01 = true;

while (keepAsking_01) {
  var userResponseWhole = prompt('Alright ' + userName + ' ,This is a difficult one: Was Pingu animated in CG-Animation or with puppets?  Please type only one single word as your answer:');
  console.log('userResponse: ' + userResponseWhole);

  userResponse = userResponseWhole.slice(0, 1);  //slices of the first character from the user input.  'c' = CG-Animation and 'p' = puppets.

  if (userResponse.toLowerCase() === 'c') {
    alert('No, sorry, all the puppets and sets in Pingu are handmade!');
    question_1.textContent = 'No, sorry, all the puppets and sets in Pingu are handmade!';
    keepAsking_01 = false;

} else if (userResponse.toUpperCase() === 'P') {
    alert('Yes! Pingu was made using traditional Stop-Motion!');
    console.log("---- User guessed correctly ----");
    question_1.textContent = 'Yes! Pingu was made using traditional Stop-Motion!';
    keepAsking_01 = false;
    correctTotal ++;

    } else {
    alert("Sorry, I didn't understand your answer. Please try again and only one word:");
    console.log("---- User Input error -----");
    };
};

// Question 02:  Born at South-Pole?

var keepAsking_02 = true;

while (keepAsking_02) {
  var userResponse = prompt('So tell me ' + userName + ' , was Pingu born at the North-Pole?  Please answer "Yes" or "No":');
  console.log('userResponse: ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no') {
    alert('YES! That is correct. Penguins are only found at the South-Pole.');
    question_2.textContent = 'YES! That is correct. Penguins are only found at the South-Pole.';
    keepAsking_02 = false;
    correctTotal ++;

} else if (userResponse.toUpperCase() === 'Y' ||         userResponse.toUpperCase() === 'YES') {
    alert('No! Penguins only live at the South-Pole!');
    question_2.textContent = 'No! Penguins only live at the South-Pole!';
    keepAsking_02 = false;

    } else {
    alert("Sorry, I didn't understand your answer. Please try again and only type 'Yes' or 'No':");
    console.log("---- User Input error -----");
    };
};

// Question 03:  Is Pinga Pigu's sister?

var keepAsking_03 = true;

while (keepAsking_03) {
  var userResponse = prompt('Is Pinga Pingu\'s sister? Please answer "Yes" or "No": ');
  console.log('userResponse: ' + userResponse);

    if (userResponse.toLowerCase() === 'n' || userResponse.toLowerCase() === 'no') {
        alert('WRONG! she really is his sister! ');
        question_3.textContent = 'WRONG! she really is his sister! ';
        keepAsking_03 = false;
    } else if (userResponse.toUpperCase() === 'Y' || userResponse.toUpperCase() === 'YES') {
        alert('Yes ! That is Correct!');
        question_3.textContent = 'Yes ! That is Correct!';
        keepAsking_03 = false;
        correctTotal ++;

    } else {
    alert("Sorry, I didn't understand your answer. Please try again and only type 'Yes' or 'No':");
    console.log("---- User Input error -----");
    };
};

// Question 04: How old is Pingu?
// Numeric input, too-high too-low + limit to 5 guesses:

var keepAsking_04 = true;
var guess = 1;

while (keepAsking_04 = true && guess < 6) {
    var userResponse = prompt('Take a guess: How old is Pingu?');
    console.log('userResponse: ' + userResponse);

    if (parseInt(userResponse) == 5) {
        alert('Well Done! You guessed right!');
        question_4.textContent = 'Yes! Pingu is 5 years old.';
        console.log('---- User guessed 5 ----');
        keepAsking_04 = false;
        guess = 6;

    } else if (parseInt(userResponse) < 5) {
        alert('No he is older than that, and he already goes to school. Try again:');
        guess += 1;
    } else if  (parseInt(userResponse) > 5) {
        alert("No, that's too old. Try again:");
        guess += 1;
    } else {
    alert("Sorry, I didn't understand your answer. Please try again and only type a number:");
    console.log("---- User Input error -----");
    };
};
       // special message when out of guesses:

if (guess === 5) {
    alert('Sorry You are out of guesses! Next question:');
    question_4.textContent = '???';
    console.log('---- No right answer after 5 guesses ----');
};


// Question 05:  // multiple correct answers from Array

var family = ["noMember", "father", "mother", "pingu", "pinga", "grandfather"];  // possible correct answers // noMember bumps index to 1 !
var guessfamily = [];                                               // user input of correct answers and counter
var keepAsking_05 = true;

while (keepAsking_05) {                                             // while-loop to reset question in case of input error

    var userResponse = prompt("Name as many of Pingu's family members as you can, separated by a comma:");
    console.log('userResponse: ' + userResponse);

    if (typeof userResponse === 'string') {                         // if userResponse is a string, turns userResponse into an Array
        var userResponse = userResponse.split(", ");
    } else {
        alert('Hey - NO NUMBERS - enter family members like "Mother" or "Pingu" only:');
    };

    for (var i = 0; i < userResponse.length; i++) {                    // loops through userResponse-Array

        if (typeof userResponse[i] === 'string' && family.indexOf(userResponse[i].toLowerCase()) > 0 && guessfamily.length < 6) {                         // 1) validates that user input is a string  2) checks if it is in family-Array  3) checks amount of correct answers
            guessfamily.push(userResponse[i]);
            keepAsking_05 = false;

        } else if (userResponse !== 'string') {                         // error msg if input is not a string
            console.log('---- user input NOT A STRING ----');
            alert('Hey - NO NUMBERS - enter family members like "Mother" or "Pingu" only:');
        };  // close if
    };   // close for-loop
};    // close while-loop

if (guessfamily.length > 4) {                                // checks amount of correct answers and if guessed all prints special msg.
    alert("Awesome! You guessed all of Pingu's family members!!!" + guessfamily);
    question_5.textContent = "Awesome! You guessed all of Pingu's family members!!!" + guessfamily;   // Improve: printing the guessfamily-Array nicely...
    console.log('---- user guessed ALL ----');
} else {
    alert("You guessed " + guessfamily.length + " of Pingu's family members correctly. - " + guessfamily);
    question_5.textContent = "You guessed " + guessfamily.length + " of Pingu's family members correctly." + guessfamily;
    console.log('---- guessed ' + guessfamily.length + ' answers correctly ----');
};


// Final Score Feedback:

alert('Congratulations! You answered ' + correctTotal + ' out of 5 questions correctly! Well done!');
console.log('Total correct answers: ' + correctTotal + ' out of 5');


//};   // window.onload function (above) closing brackets
