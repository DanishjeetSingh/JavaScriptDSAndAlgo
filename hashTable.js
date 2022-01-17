//-----------------------------------------------------------------------------------------------
//------------------------------------- HASHTABLE CLASS ----------------------------------------
//-----------------------------------------------------------------------------------------------


class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    
    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);

console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.set('apples', 9));
console.log(myHashTable.get('apples'));
console.log(myHashTable.set('oranges', 69));
console.log(myHashTable.get('oranges'));
console.log(myHashTable.keys());


//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//------------------------------------- FIRST RECURRING CHARACTER ----------------------------------------
//-----------------------------------------------------------------------------------------------

function firstRecurringCharacter(input) {
    let map = {};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        }else{
            map[input[i]] = i;
        }
        //console.log(map);
    }
    return undefined;
}

let array1 = [1, 2, 3, 1, 2, 3];

console.log(firstRecurringCharacter(array1));


//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

