/* Write a function that meets the following requirements:
a. Accepts five parameters that can each be of any data type (arguments can even be missing, such as when other code
    calls your function with fewer than five arguments)
b. Returns an array of only the parameter values that are unique. Order of the values doesn't matter

function getUnique(a,b,c,d,e) {
 // Write your logic here

 // Return an array that contains only unique values here
}

console.log(getUnique(3,-9,3,-9,-9));   // Should print      [3, -9]
console.log(getUnique([1,2], "shoe", true, "shoe")  // Should print     [[1,2], "shoe", true]


New Comment: I think this is more like Challenge JS-7, but using two for-loops:

*/

var getUnique = function(param_1, param_2, param_3, param_4, param_5) {
    var groupAray = [];
    switch {
        case 1:
            if (param_1 || param_1 === 0) {
                groupAray.push(param_1);
            };
            break;
        case 2:
            if (param_1 || param_1 === 0 && param_2 || param_2 === 0) {
                groupAray.push(param_2);
            };
            break;
        case 3:
            if (param_1 || param_1 === 0 && param_2 || param_2 === 0 && param_3 || param_3 === 0) {
                groupAray.push(param_3);
            };
            break;
        case 4:
            if (param_1 || param_1 === 0 && param_2 || param_2 === 0 && param_3 || param_3 === 0 && param_4 || param_4 === 0) {
                groupAray.push(param_4);
            };
            break;
        case 5:
            if (param_1 || param_1 === 0 && param_2 || param_2 === 0 && param_3 || param_3 === 0 && param_4 || param_4 === 0 && param_5 || param_5 === 0) {
                groupAray.push(param_5);
            };
            break;
        default:
            console.log("Incorrect number of parameters or no parameter passed to function getUnique");
    };

// Add items from groupArray to uniqueArray and check if they fo not already exist in uniqueArray:

for (var i1 = 0; i < groupAray.length; i ++) {  // var i1 is used below in the 2nd for-loop to iterate through groupArray step by step...
    var uniqueArray = [groupArray[0]];

    for (var = i2 in uniqueArray) {          // checks each item that already made it into uniqueArray
        if (groupArray[i1] !=== i2) {        // agains the potential new item from groupArray
            uniqueArray.push(groupArray[i1]);
        }
    }

console.log(uniqueArray);
