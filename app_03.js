// Codefellows-201 March 2016
// JMaas Week1-day-3 Wednesday Lab Assignment:


var userName = prompt('Welcome to the PINGU PROFILE page! Have a look around - when You are ready to take the Quiz enter Your name to          start:');

console.log('The user said there name is ' + userName);

alert('Hey there ' + userName + ', I\'m going to ask you some questions about me. Please click "ok", then answer Y or N to the next question.');

var keepAsking = true;

while (keepAsking) {
  var userResponse = prompt('Was, I born on the moon?');
  console.log('userResponse: ' + userResponse);

  if (userResponse.toLowerCase() === 'n' || userResponse.toUpperCase() === 'NO') {
    alert('Nope, I was actualy born on the moon. I\'ma moonian computer language.');
    keepAsking = false;
  } else if (userResponse === 'Y') { // TODO: Make this more robust!
    alert('Nice, I was born on the moon');
    keepAsking = false;
  } else {
    alert('Ooops!, you should have given a Y or N, so you loose this round.');
  }

}
