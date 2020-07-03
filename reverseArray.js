function reverseArray(array) {
    var newArray = [];
    var index = 0;
    for (i = array.length - 1; i >= 0; i--) {
        newArray[index] = array[i];
        index++;
    }

    return newArray;
}
function reverseArrayInPlace(array) {
    var count  = 1;
    for (i = 0; i < array.length/2; i++) {
        var temp = array[i];
        array[i] = array[array.length - count];
        array[array.length - count] = temp;
        count++;
    }
}
var array = [12, 9, 7, 66, 100, 77, 14, 200, 21];
console.log("original array: " + array);
reverseArrayInPlace(array);
console.log("reversed in place: " + array);