//-----------------------------------------------------------------------------------------------
//------------------------------------- FACTORIAL ----------------------------------------
//-----------------------------------------------------------------------------------------------

function findFactorialRecursive(number) {
    if (number === 2){
        return 2;
    }
    return number * findFactorialRecursive(number - 1)

}

function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2){
        answer = 2;
    }
    for (i = 2; i <= number; i++){
        answer = answer * i;
    }
    return answer;
}

console.log(findFactorialRecursive(5))

console.log(findFactorialIterative(5))

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//------------------------------------- FIBONACCI ----------------------------------------
//-----------------------------------------------------------------------------------------------

function fibonacciRecursive(n) {
    if (n < 2){
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) {
    let arr = [0, 1];
    for (i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

console.log(fibonacciRecursive(6))
console.log(fibonacciIterative(5))

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//------------------------------------- REVERSE STRING ----------------------------------------
//-----------------------------------------------------------------------------------------------

function reverseStringRecursive(str) {
    if (str === ''){
        return '';
    } else{
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStringRecursive("hello"));

function reverseString(str) {
    let arrayStr = str.split('');
    let reversedArray = [];

    function addToArray(array){
        if(array.length > 0){
            reversedArray.push(array.pop());
            addToArray(array);
        }
        return;
    }
    addToArray(arrayStr);
    return reversedArray.join('');
}

console.log(reverseString('hello world'))

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------