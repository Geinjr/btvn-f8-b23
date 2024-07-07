var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var newArray = [];

function iterateArray(arr) {
    arr.forEach(function (element) {
        if (Array.isArray(element)) {
            iterateArray(element);
        } else {
            newArray.push(element);
        }
    });
}

iterateArray(arr);

console.log(newArray);
