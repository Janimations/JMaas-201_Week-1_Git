// Codefellows-201 March 2016
// JMaas-Week1 Tuesday Lab Assignment:

/*
I volunteer with Portland Mountain Resue, and as part of their
education outreach programm this would actually come in really
handy as a quick working web-app... I can see a good possibillity that I will come back to
this later after other assignments... It would have to be a lot more sophisticated and have more options obviously.
*/

// declaring variables:

var _01_route      = document.getElementById('_01_route');
var _02_who        = document.getElementById('_02_who');
var _03_conditions = document.getElementById('_03_conditions');
var _04_research   = document.getElementById('_04_research');
var _05_gear       = document.getElementById('_05_gear');
var _06_register   = document.getElementById('_06_register');

//01 Where - Route:
var climbingRoute = prompt('Which Mountain are you planning to climb? Mt.StHellens, Mt.Hood or Mt.Rainier?');
console.log('Sweet! You are going to climb ' + climbingRoute + '!  Good choice.');
_01_route.textContent = 'Sweet! You are going to climbing' + climbingRoute + '! Good choice.';

                        // add more text and options that differentiate between StHellens, Hood and Rainer

//02 Who with ?:
var climbingPartner = prompt('Who are You climbing with?');
console.log('Great, so You are climbing with ' + climbingPartner + '.');
_02_who.textContent = 'Great, so You are climbing with ' + climbingPartner + '.';

// Confirm experience
confirm('Is' + climbingPartner + ' experienced?');
console.log(climbingPartner + " is experienced.");

//03 Conditions
var checkConditions = prompt('Did You check Weather and Avalanche forecast?');

if (checkConditions.toLowerCase() === 'n' || checkConditions.toLowerCase() === 'no') {
    _03_conditions.textContent = "You didn't !? STOP right there, go check the conditions and start again!";
    console.log("You didn't !? STOP right there, go check the conditions and start again!");
} else {
    _03_conditions.textContent = 'Your answer is ' + checkConditions + ' Good, be safe out there!';
    console.log('Your answer is ' + checkConditions + ' Good, be safe out there!');
};
                // add resource links... or iframes ?

//04 Research
var researchRoute = prompt('Do you know your Route and can navigate it safely?');

if (researchRoute.toLowerCase() === 'n' || researchRoute.toLowerCase() === 'no') {
    _04_research.textContent = "You didn't !? STOP right there, get a map, compass and GPS and start again!";
    console.log("You didn't !? STOP right there, get a map, compass and GPS and start again!");
} else {
    _04_research.textContent = 'Your answer is ' + researchRoute + '.  --- Good, be safe out there!';
    console.log('Your answer is ' + researchRoute + '. --- Good, be safe out there!');
};

//05 Gear
var checkGear = prompt('Do you have all the 10 Essentials?');

if (checkGear.toLowerCase() === 'n' || checkGear.toLowerCase() === 'no') {
    _05_gear.textContent = "You didn't !? STOP right there, get a map, compass and GPS and start again!";
    console.log("You didn't !? STOP right there, get a map, compass and GPS and start again!");
} else {
    _05_gear.textContent = 'Your answer is ' + researchRoute + ' Good, be safe out there!';
    console.log('Your answer is ' + researchRoute + ' Good, be safe out there!');
};
                      // add more information for glacier-travel and Mt.Rainier

//06 Register
var backupPerson = prompt('What is Your Backup-Plan? Enter the name of the person who knows where you are going:');
console.log('OK, make sure to leave a route description and estimated time of return with " ' + backupPerson + ' " and please sign-in wiwth the local climbing-register.' );
_06_register.textContent = 'OK, make sure to leave a route description and estimated time of return with " ' + backupPerson + ' " and please sign-in wiwth the local climbing-register.';
