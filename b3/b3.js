var arr = [
    ["a", 1, true],
    ["b", 2, false],
];

var stringArray = [];
var numberArray = [];
var booleanArray = [];

function iterateArray(arr) {
    arr.forEach(function (element) {
        if (Array.isArray(element)) {
            iterateArray(element);
        } else {
            if (typeof element === "string") {
                stringArray.push(element);
            } else if (typeof element === "number") {
                numberArray.push(element);
            } else if (typeof element === "boolean") {
                booleanArray.push(element);
            }
        }
    });
}

iterateArray(arr);
var newArray = [stringArray, numberArray, booleanArray];
console.log(newArray);
