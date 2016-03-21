// Codefellows-201 March 2016
// JMaas Week1-day-5 Friday Lab Assignment:

// Questions-Array containing objects :
        // questionType: number,                          - number: 1 = Yes/No question,  2 = too-high/too-low question,  3 = multiple correct answers

        // promptUser: "string",                            - string: initial text for question prompt that initializes var userResponse
        // checkAnswer = ["string1", "string2"...],         - array: can contain multiple correct answers ! ie. [yes, no] or [Pingu, Mother, Father]
        // answerUserTrue: "string",                        - string: confirm correct answer msg
        // answerUserFalse = ["string1", "string2"...],     - array: also contains error/default msg when input does not work on anything
        // correctAnswersArray = [],                        - array: collects correct answers if there are more than one, also serves as a counter
        // consoleLog: "string",

/*********************************
questionsArray[0] = name?
questionsArray[1] = CG-Animation or Puppets?
questionsArray[2] = Born at South-Pole or North-Pole?
questionsArray[3] = Is Pinga Pingu's sister ?
questionsArray[4] = How old is Pingu? (number input: too-high and too-low, max 5 guesses)
questionsArray[5] = Name Pingu's family members (multiple correct answers)
************************************/

var questionsArray = [

        // Question 00:  Made with CG-Animation?
        {
            promptUser: 'Welcome to the PINGU GUESSING GAME! Have a look around - when You are ready to take the Quiz enter Your name to start:',
            consoleLog: '--- userName is: ' + userName ' ---',
        },
        // Question 01:
        {
            promptUser: 'Alright ' + userName + ' ,This is a difficult one: Was Pingu animated in CG-Animation or with puppets?  Please type only one single word as your answer:',
            checkAnswer = [c, p],
            answerUserTrue: 'Yes! Pingu was made using traditional Stop-Motion!',
            answerUserFalse = ['No, sorry, all the puppets and sets in Pingu are handmade!', 'Sorry, I didn\'t understand your answer. Please try again and only one word:' ],
            correctAnswersArray = [],
            consoleLog = ['--- Question 1 correct ---', 'Question 1 wrong answer']
        },
        // Question 02:  Born at South-Pole?
        {
            promptUser: 'So tell me ' + userName + ' , was Pingu born at the North-Pole?  Please answer "Yes" or "No":',
            checkAnswer = [y, n],
            answerUserTrue: 'YES! That is correct. Penguins are only found at the South-Pole.',
            answerUserFalse = [],
            correctAnswersArray = []
        },
        // Question 04:
        {
            promptUser:
            checkAnswer = [],
            answerUserTrue:
            answerUserFalse = [],
            correctAnswersArray = []
        },
        // Question 05:
        {
            promptUser: "Name as many of Pingu's family members as you can, separated by a comma:",
            checkAnswer = ["noMember", "father", "mother", "pingu", "pinga", "grandfather"],
            answerUserTrue: "You guessed " + correctAnswersArray.length + " of Pingu's family members correctly. - " + correctAnswersArray,
            answerUserFalse = ["Sorry, but none of the persons you entered are part of Pingu's family...", "Would You like to guess again?"],
            correctAnswersArray = []
        },

];          // questionsArray close
