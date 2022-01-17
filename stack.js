//-----------------------------------------------------------------------------------------------
//------------------------------------- STACK & NODE CLASS (IN LINKED LIST)----------------------------------------
//-----------------------------------------------------------------------------------------------

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        console.log(this.top);
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        //const holdingPointer = this.top
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack;

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();



console.log(myStack);

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------
//------------------------------------- STACK & NODE CLASS (IN ARRAY)----------------------------------------
//-----------------------------------------------------------------------------------------------

class StackWithArray{
    constructor(){
        this.array = [];
    }
    peek(){
        console.log(this.array[this.array.length - 1]);
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}

const myStack2 = new StackWithArray();

myStack2.push('google');
myStack2.push('udemy');
myStack2.push('discord');
myStack2.peek();
myStack2.pop();

console.log(myStack2);