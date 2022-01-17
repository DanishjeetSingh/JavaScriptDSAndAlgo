//-----------------------------------------------------------------------------------------------
//------------------------------------- ARRAY CLASS ----------------------------------------
//-----------------------------------------------------------------------------------------------

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];        
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();

newArray.push("soup!");
newArray.push("hey");
newArray.push("nice");
newArray.delete(1);

console.log(newArray);

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//------------------------------------- STRING REVERSE ----------------------------------------
//-----------------------------------------------------------------------------------------------

function reverseString(string) {
    let array = string.split('')
    let len = array.length;
    for(i = 0; i < Math.floor(len/2); i++){
        let swap = array[i];
        array[i] = array[len - 1 - i];
        array[len - 1 - i] = swap;
    }
    return array.join('');
}

const string1 = "abcde"

console.log(reverseString(string1));

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//------------------------------------- TWO SUM ----------------------------------------
//-----------------------------------------------------------------------------------------------

function twoSum(nums, target) {
    for(let i = 0; i <= nums.length - 1; i++){
        for(let j = 1; j <= nums.length - 1; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

const nums1 = [1, 2, 3, 4, 5]

console.log(twoSum(nums1, 7));

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

