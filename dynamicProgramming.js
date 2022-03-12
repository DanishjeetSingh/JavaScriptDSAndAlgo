// addTo80 function adds 80 to the input number

function addTo80(n){
    return n + 80;
}

// cache is an empty object, which is supposed to store key value pairs,
// and it will act as an actual cache 

let cache = {};


// memoizedAddTo80 function uses cache to work

function memoizedAddTo80(n){
    if (n in cache){
        return cache[n];
    } else {
        console.log("executing else block")
        cache[n] = 5 + 80;
        return cache[n];
    }
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));