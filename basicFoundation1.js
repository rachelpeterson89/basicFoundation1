// 1 - Get 1 to 255

function arr1() {

    var arr1 = [];

    for (var i = 1; i < 256; i++) {
        arr1.push(i);
    }

    return arr1;

}

console.log(arr1());



// 2 - Get Even 1000

function sum1() {

    var sum = 0;

    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sum1());



// 3 - Sum Odd 5000

function sum_odd() {

    var sum = 0;

    for (var i = 1; i < 5001; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sum_odd());



// 4 - Iterate an Array

function iter_arr(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log(iter_arr([1, 2, 3, 4]));



// 5 - Find Max

function find_max(arr) {

    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(find_max([1, 2, 3, 4]));



// 6 - Find Average

function average(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    var avg = sum / arr.length;
    return avg;
}
console.log(average([1, 2, 3, 4]));



// 7 - Array Odd

function arrOdd() {

    var arr = [];

    for (var i = 1; i < 51; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(arrOdd());



// 8 - Greater than Y

function valueY(arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
var Y = 2;
console.log(valueY([1, 2, 3, 4]));



// 9 - Squares

function squared(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(squared([1, 2, 3, 4]));

// 10 - Negatives

function negatives(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negatives([3, 2, -1, -3]));



// 11 - Max/Min/Avg

function maxMinAvg(arr) {

    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    return [max, min, avg];
}
console.log(maxMinAvg([1, 2, 3, 4]));



// 12 - Swap Values

function swap(arr) {

    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
console.log(swap([1, 2, 3, 4]));

// 13 - Number to String

function toString(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(toString([-2, -1, 0, 1]));