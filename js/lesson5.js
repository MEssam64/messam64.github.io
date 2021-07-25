function max(a, b) {
    if (a > b)
        return a;
    return b;
}

function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

function isVowel(s) {
    var vowels = ["a", "e", "i", "o", "u"];
    if (vowels.indexOf(s) === -1)
        return false;
    return true;
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i];
    }
    return mul;
}

function reverse(s) {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
}

function findLongestWord(arr) {
    return arr.sort((a, b) => b.length - a.length)[0].length;
}

function filterLongWords(arr, i) {
    return arr.filter(x => x.length > i);
}

function multiplyby10(arr) {
    return arr.map(x => x * 10);
}

function getEqualTo(arr, i) {
    return arr.filter(x => x === i);
}

function getProduct(arr) {
    return arr.reduce((x, y) => x * y);
}

function myFunctionTest(expected, function2test) {
    var functionHeader = function2test.toString().split('return')[1].trim().split(";")[0];
    let str = "Expected output of " + functionHeader + " is " + expected + " ";
    var result = function2test();
    if (!Array.isArray(expected)) {
        if (expected === result) {
            return str + "TEST SUCCEEDED.";
        } else {
            return str + "TEST FAILED.  Expected " + expected + " found " + result;
        }
    }
    else {
        if (expected.length !== result.length)
            return str + "TEST FAILED.  Expected " + expected + " found " + result;
        else {
            for (let i = 0; i < expected.length; i++) {
                if (expected[i] !== result[i])
                    return str + "TEST FAILED.  Expected at index " + i + " " + expected[i] + " found " + result[i];
            }
            return str + "TEST SUCCEEDED.";
        }
    }
}
// Expected SUCCEEDED
console.log(myFunctionTest(33, function () { return max(19, 33); }));
// Expected FAILED
console.log(myFunctionTest(3, function () { return max(8, 3); }));

// Expected SUCCEEDED
console.log(myFunctionTest(49, function () { return maxOfThree(8, 49, 18); }));
// Expected FAILED
console.log(myFunctionTest(18, function () { return maxOfThree(8, 49, 18); }));

// Expected SUCCEEDED
console.log(myFunctionTest(true, function () { return isVowel("i"); }));
// Expected FAILED
console.log(myFunctionTest(false, function () { return isVowel("a"); }));
// Expected SUCCEEDED
console.log(myFunctionTest(false, function () { return isVowel("m"); }));

// Expected SUCCEEDED
console.log(myFunctionTest(31, function () { return sum([5, 9, 8, 6, 3]); }));
// Expected FAILED
console.log(myFunctionTest(30, function () { return sum([5, 9, 8, 6, 3]); }));

// Expected SUCCEEDED
console.log(myFunctionTest(192, function () { return multiply([3, 2, 4, 8]); }));
// Expected FAILED
console.log(myFunctionTest(105, function () { return multiply([3, 2, 4, 8]); }));

// Expected SUCCEEDED
console.log(myFunctionTest("demahoM", function () { return reverse("Mohamed"); }));
// Expected FAILED
console.log(myFunctionTest("Mohamed", function () { return reverse("Mohamed"); }));

// Expected SUCCEEDED
console.log(myFunctionTest(7, function () { return findLongestWord(["cat", "Ahmed", "Mohamed", "look", "Hello", "I"]); }));
// Expected FAILED
console.log(myFunctionTest(6, function () { return findLongestWord(["cat", "Ahmed", "Mohamed", "look", "Hello", "I"]); }));

// Expected SUCCEEDED
console.log(myFunctionTest(["Ahmed", "Mohamed", "Hello"], function () { return filterLongWords(["cat", "Ahmed", "Mohamed", "look", "Hello", "I"], 4); }));
// Expected FAILED
console.log(myFunctionTest(["cat", "Ahmed", "Mohamed", "Hello"], function () { return filterLongWords(["cat", "Ahmed", "Mohamed", "look", "Hello", "I"], 4); }));

// Expected SUCCEEDED
console.log(myFunctionTest([30, 90, 100, 150, 20, 700], function () { return multiplyby10([3, 9, 10, 15, 2, 70]); }));
// Expected FAILED
console.log(myFunctionTest([30, 90, 100, 1500, 20, 700], function () { return multiplyby10([3, 9, 10, 15, 2, 70]); }));

// Expected SUCCEEDED
console.log(myFunctionTest([3, 3, 3], function () { return getEqualTo([3, 9, 3, 15, 3, 70], 3); }));
// Expected FAILED
console.log(myFunctionTest([3, 3, 5], function () { return getEqualTo([3, 9, 3, 15, 3, 70], 3); }));

// Expected SUCCEEDED
console.log(myFunctionTest(378, function () { return getProduct([2, 3, 9, 7]); }));
// Expected FAILED
console.log(myFunctionTest(350, function () { return getProduct([2, 3, 9, 7]); }));