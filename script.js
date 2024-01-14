console.time("timer");


//////////////////////////////implementation of stack class/////////////////////////

class Stack{
    constructor(){
        this.items = [];
    }//push method is responsible for adding elements on the top of the stack 

    push(element){
        if(element === undefined || element === null){
            throw new Error("Cannot push idefined or null elements to the stack");
        }
        this.items.push(element);
    }
    pushAll(elements){ //push arrays at once 

        elements.forEach(element => this.push(element));
    }
    pop(){//pop method to get the last in
        if(this.isEmpty){
            return "underflow"; //if the stack is empty nothig to pop
        }
        return this.items.pop();
    }
    peek(){//peek on the last item on the stack
        let indexOfLastElement = this.items.length;
        if(this.isEmpty){
            return "underflow"; // if the stack is empty nothing to peek
        }
        return this.items[indexOfLastElement-1]; // trying to access the first element of the Array
    }
    isEmpty(){ //see if the stack is empty

     return  stack.items.length === 0  
        
      /* if( this.items.length === 0 ){ ////see why this whole if block commented in the future.
        return true;
       }
       return false;*/
    }
    size(){ //get the size of the stack
        return this.items.length; 
    }
}

//////////////////////////////implementation of quese class/////////////////////////

class Queue { 
    constructor(){
        //initialized an empty array to store elements
        this.items = [];     
    }
    enqueue(elements){
        this.items.push(elements);
    }
    isEmpty(){
        return this.items.length === 0;// check the length of the underlaying array
        //return true; no need to do this getinto a single line 
    }

    dequeue(){
      if (this.isEmpty){
        console.log("Queue has front nor rear");
      } return this.items.shift();
    }
    print(){
        console.log(this.items);
    }
    front(){
        if(this.isEmpty){
            return "Queue is Empty!";
        }
        return this.items[0];

    }
    rear(){
        return this.items.length;
    }
}


const firstQueue = new Queue();

firstQueue.dequeue();

let firstElement = firstQueue.front();
let lastElement  = firstQueue.rear();
console.log( "the head is : ", firstElement);
console.log( "the head is : ", lastElement);





firstQueue.print();





















/////////////////////////////////////////////////////

/////////////////////////// stack operations //////////////////////////////////////////////////////

/////////////////////////////////////////////////////
/*
//instantiate a stack object and push 
const stack = new Stack();

console.log(stack.items);//array of stack


const valuesToPush = [12,14,45,78,6564,97465,4658,4];
stack.pushAll(valuesToPush);

//console.log(stack.items);

//pop items
let popedItem = stack.pop();

//peek the last element of the stack array 
let theItem = stack.peek();

//console.log(stack.items.length-1);//see how to access the item length of the stack.

//check the stack after pop performed 
console.log(popedItem);
console.log("the first item : ", theItem);


//check isEmpty()
console.log(stack.isEmpty());
//check size ()
console.log("Stack is : ", stack.size());

*/





















/*
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////OOP theory practice for implementing stack 'this'///////
///////////////////////////////////////////////////////////////////////////////////


//function context

function thisSample(){

    //console.log("this is this : ",this);
}

thisSample();

const allAges = {
    age : 12,name: 23, price: 78,
    addmethod : function add(a,b){
       // console.log("this is from:" , this);
    }
}

//console.log("this all the object of :",allAges)
allAges.addmethod(12,12);

const person = {
    age : 29,
    ID : 98839293,
    index : 900,

    introduce(){
        console.log('hello ','I am ' , this.age,'old!');
    }
}

class persons {
    constructor(age){
        this.age = age;
    }
}

var sunil = new persons(87);
console.log(sunil.age);


person.introduce();
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////END OF OOP////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//console.log("this is global context",this);
*/




















console.timeEnd("timer");