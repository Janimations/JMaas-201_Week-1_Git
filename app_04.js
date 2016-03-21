// Codefellows-201 March 2016
// JMaas Week1-day-5 Friday Lab Assignment:

// Question-objects properties:

        // promptUser: "string",                            - string: initial text for question prompt that initializes var userResponse
        // checkAnswer = ["XXXX", "string1", "string2"...],         - array: XXXX is a placeholder to avoid return "0" rom indexOf(). Array can contain multiple correct answers ! ie. [yes] or [puppets] or [Pingu, Mother, Father]
        // answerUserTrue: "string",                        - string: confirm correct answer msg
        // answerUserFalse = ["string1", "string2"...],     - array: LAST item in array contains error/default msg when input does not work on anything
        // correctAnswersArray = [],                        - array: collects correct answers if there are more than one, also serves as a counter
        // consoleLog: "string",                            - console.log() for debugging only...

/************************************
questionsArray[0] = name?
questionsArray[1] = CG-Animation or Puppets?
questionsArray[2] = Born at South-Pole or North-Pole?
questionsArray[3] = Is Pinga Pingu's sister ?
questionsArray[4] = How old is Pingu? (number input: too-high and too-low, max 5 guesses)
questionsArray[5] = Name Pingu's family members (multiple correct answers)
************************************/

// The Idea is to have an array with objects, who themselves store information in properties that are arrays... 2 levels deep:


var questionsArray = [

        // Question 00:  prompt for userName
        {
            promptUser: 'Welcome to the PINGU GUESSING GAME! Have a look around - when You are ready to take the Quiz enter Your name to start:',
        },
        // Question 01: Made with CG-Animation?
        {
            promptUser: 'Alright ' + userName + ' ,This is a difficult one: Was Pingu animated in CG-Animation or with puppets?  Please type only one single word as your answer:',
            checkAnswer: ["XXX", "p", "c"],
            answerUserTrue: 'Yes! Pingu was made using traditional Stop-Motion!',
            answerUserFalse: ['No, sorry, all the puppets and sets in Pingu are handmade!', 'Sorry, I didn\'t understand your answer. Please try again and only one word:' ],
            correctAnswersArray: [],
            consoleLog: ['--- Question 01 correct answer ---', '--- Question 01 wrong answer ---'],
        },
        // Question 02:  Born at South-Pole?
        {
            promptUser: 'So tell me ' + userName + ' , was Pingu born at the North-Pole?  Please answer "Yes" or "No":',
            checkAnswer: ["XXX", "y", "n"],
            answerUserTrue: 'YES! That is correct. Penguins are only found at the South-Pole.',
            answerUserFalse: ['No! Penguins only live at the South-Pole!', "Sorry, I didn't understand your answer. Please try again and only type 'Yes' or 'No':"],
            correctAnswersArray: [],
            consoleLog: ['--- Question 02 correct answer ---', '--- Question 02 wrong answer ---'],
        },
        // Question 03: Is Pinga Pigu's sister?
        {
            promptUser: 'Is Pinga Pingu\'s sister? Please answer "Yes" or "No":',
            checkAnswer: ["XXXX", "y", "n"],
            answerUserTrue: 'Yes ! That is Correct!',
            answerUserFalse: ['WRONG! she really is his sister!', "Sorry, I didn't understand your answer. Please try again and only type 'Yes' or 'No':"],
            correctAnswersArray: [],
            consoleLog: ['--- Question 03 correct answer ---', '--- Question 03 wrong answer ---'],
        },
        // Question 04:  How old is Pingu?    // Numeric input, too-high too-low + limit to 5 guesses:
        {
            promptUser: 'Take a guess: How old is Pingu? (You can guess 3 times)',
            checkAnswer: [5],
            answerUserTrue: 'Well Done! You guessed right!',
            answerUserFalse: ['No he is older than that, and he already goes to school. Try again:', "No, that's too old. Try again:", "Sorry, I didn't understand your answer. Please try again and only type a number:"],
            correctAnswersArray: [0, 0],  // index has two items already so that it inly takes three more guesses to break the while loop
            consoleLog: ['--- Guess number: ' + questionsArray[i].correctAnswersArray.length + ' --- UserResponse: ' + UserResponse + ' ---'],
        },
        // Question 05:
        {
            promptUser: "Name as many of Pingu's family members as you can, separated by a comma:",
            checkAnswer: ["XXXX", "father", "mother", "pingu", "pinga", "grandfather"],
            answerUserTrue: "You guessed " + questionsArray[i].correctAnswersArray.length + " out of 5 of Pingu's family members correctly. - " + correctAnswersArray,
            answerUserFalse: ["Sorry, but none of the persons you entered are part of Pingu's family... Would You like to guess again?", 'Sorry, I did not understand your answer. Try again: Name as many of Pingu\'s family members as you can, separated by a comma:'],
            correctAnswersArray: [],
            consoleLog: ['--- Input error, " ' + userResponseArray[x] + ' " is not a string ---'],
        },

];          // questionsArray close

// variables for updating html in index_04.html:

var question_1 = document.getElementById('question_1');
var question_2 = document.getElementById('question_2');
var question_3 = document.getElementById('question_3');
var question_4 = document.getElementById('question_4');
var question_5 = document.getElementById('question_5');


/****************************************************
// Main Codde for Guessing game using questionsArray:
****************************************************/


var userName = prompt(questionsArray.promptUser[0]);
    console.log('--- ' + userName + ' ---');

for (var i = 1; i < questionsArray.length; i++) {                               // i = 1 because "0" was the "What is you name?" prompt. For-loops through all the questions in questionsArray

    var keepAsking = true;                      // part of the true condition for the while-loop (kept in the code as a quicker way to break the while-loop)

    while(keepAsking && questionsArray[i].correctAnswersArray.length < 6) {        // < 6 is to accomodate Question 05 & 04 where correctAnswersArray acts as a counter

        var userResponse = prompt(questionsArray.promptUser[i]);                // gets string from promptUser property in questionsArray
        var userResponseArray = userResponse.split(", ");                       // userResponse is now an Array ! this is for all questions !


        // Questions 01, 02, 03: Yes/No or p/c:
        if (userResponseArray.length < 2 && parseInt(userResponseArray[0]) == NaN) {      // if the userResponseArray contains only one answerUserResponse (Question 05 has multiple) and contained a "word-string" parseInt(userResponseArray[0]) will return Nan, and this will run

            userResponseSlice = userResponseArray[0].slice(0, 1);  //slices of the first character

            if (userResponseSlice.toLowerCase() === questionsArray[i].checkAnswer[1]) {
                  alert(questionsArray[i].answerUserTrue);
                  question_1.textContent = questionsArray[i].answerUserTrue;
                  console.log(questionsArray[i].consoleLog[0]);
                  questionsArray[i].correctAnswersArray.push(userResponseArray[0]);         // adds one item to correctAnswersArray for totel score counting
                  keepAsking = false;

            } else if (userResponse.toLowerCase() === questionsArray[i].checkAnswer[2]) {
                  alert(questionsArray[i].answerUserFalse[0]);
                  question_1.textContent = questionsArray[i].answerUserFalse[0];
                  console.log(questionsArray[i].consoleLog[1]);
                  keepAsking = false;

            } else {
                  alert(questionsArray[i].answerUserFalse[1]);
                  console.log("--- Question " + i + " User Input error ---")
            };



        // Question 04: numeric input, too-high too-low + limit to 3 guesses:
        } else if (userResponseArray.length < 2 && typeof userResponseArray[0] === 'number') {      // if its only one entry and a number it "shuold" be for question 04
            if (parseInt(userResponseArray[0]) == 5) {
                alert(questionsArray[i].answerUserTrue);
                question_4.textContent = questionsArray[i].answerUserTrue;
                console.log(questionsArray[i].consoleLog[0]);
                keepAsking = false;

            } else if (parseInt(userResponseArray[0]) < 5) {
                alert(questionsArray[i].answerUserFalse[0]);
                questionsArray[i].correctAnswersArray.push(userResponseArray[0]);           // adds one item to array as a counter...
                console.log(questionsArray[i].consoleLog[0]);

            } else if  (parseInt(userResponse) > 5) {
                alert(questionsArray[i].answerUserFalse[1]);
                questionsArray[i].correctAnswersArray.push(userResponseArray[0]);           // adds one item to array as a counter...
                console.log(questionsArray[i].consoleLog[0]);

            } else {
              alert(questionsArray[i].answerUserFalse[2]);                                  // error message, does not count as a guess
              console.log("---- Question 04 User Input error -----");
            };

        // Question 5: multiple correct answers
        } else {
            while (questionsArray[i].correctAnswersArray.length < 6) {                  // if max correct answers is reached it will break
                for (var x = 0; x < userResponseArray.length; x++) {                    // x loops through userResponseArray

                    if (questionsArray[i].checkAnswer.indexOf(userResponseArray[x].toLowerCase()) > 0) {       // if item is in the checkAnswer array indexOf will return a number > 0
                        questionsArray[i].correctAnswersArray.push(userResponseArray[x]);                         // item gets pushed into correctAnswersArray... (+1)

                    // errors:
                    } else if (userResponseArray[x] !== 'string') {                         // error msg if input is not a string
                        console.log(questionsArray[i].consoleLog[0]);
                    } else if (questionsArray[i].correctAnswersArray.length == 0) {
                        console.log(questionsArray[i].answerUserFalse[0]);
                        alert(questionsArray[i].answerUserFalse[0]);
                    } else {
                        console.log(questionsArray[i].answerUserFalse[1]);
                        alert(questionsArray[i].answerUserFalse[1]);
                    };
                };   // 05 for-loop close
            };   // 05 while-loop close

            // User Feedback: how many correct out of 5:
            console.log(questionsArray[i].answerUserTrue);



        }; // else close

    };  // while-loop close

};  // for-loop close

// Feedback to User:

    // total score:














//
