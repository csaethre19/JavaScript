//builds up a data structure from array [1,2,3]
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }

    return list;
}
//takes a list and produces an array from it
function listToArray(list) {
    let array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
//creates new list with el appended to front of list
function prepend(value, list) {
    return {value, rest: list};
}
//takes a list and a number and returns the nth element
function nthElement(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nthElement(list.rest, n - 1);
}
function deepEqual(a, b) {
    if (a === b) return true;
  
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
}
console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(prepend(4, prepend(10, null)));
console.log(nthElement(arrayToList([1,2,3]), 2));
console.log(deepEqual("2", 2));
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));