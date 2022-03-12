// addTo80 function adds 80 to the input number

function addTo80(n){
    return n + 80;
}

// memoizedAddTo80 function uses cache to work

function memoizedAddTo80(){
    let cache = {}; // cache is an empty object, which is supposed to store key value pairs, and it will act as an actual cache 
    return function(n){
        if (n in cache){
            return cache[n];
        } else {
            console.log("executing else block");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log(1, memoized(5));
console.log(2, memoized(5));
console.log(3, memoized(2));
console.log(4, memoized(2));


// fibonacci sequence with memoization 

function fibonacciMaster(){ // top down approach
    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n];
        }else{
            if(n < 2){
                return n;
            } else{
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

function fibonacciMaster2(n){ // bottom up approach
    let answer = [0, 1];
    for(let i = 2; i <= n; i++){
        answer.push(answer[i - 1] + answer[i - 2]);
    }
    return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log(fasterFib(12))
console.log(fibonacciMaster2(12))