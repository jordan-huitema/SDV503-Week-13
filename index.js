
//classes
// A class is a template that can be applied to an object

let firstNm = ["Jordan"]
let lastNm = ["Huitema"]
let year = [1998]
class Student {
    constructor(firstName, lastName, year, age) { //constructors are special functions that run when the class is applied to a object
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
        this.age = age
    }
    print(input) {                               //functions do not need to be declared within a class, they are... 'assumed' in a sense
        //functions are called methods when inside a class
        console.log(input)
    }
    studentAge() {
        return `${this.firstName} is ${2020 - this.year} years old`
    }
    fullName() {
        return `Full name is ${this.firstName} ${this.lastName}`
    }
    email() {
        return `Email is ${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}@gmail.com`
    }
}

let students = new Student(firstNm, lastNm, year)     //applys Students class template to students obj and uses firstNms and lastNms as data to input
console.log(students)

students.print("Beans")                                 //you can call a func within a obj the same way you would access a property 

let studentsTwo = new Student("Ali", "Kahwaji", 1993)
console.log(studentsTwo)

console.log(studentsTwo.studentAge())
console.log(studentsTwo.fullName())
console.log(studentsTwo.email())

//calculator

class Calc {
    add(a, b) {
        return a + b
    }
    sub(a, b) {
        return a - b
    }
    mul(a, b) {
        return a * b
    }
    div(a, b) {
        return a / b
    }
}
let calc = new Calc
console.log(calc.add(10, 5))
console.log(calc.sub(10, 5))
console.log(calc.mul(10, 5))
console.log(calc.div(10, 5))

//stack
//stack uses last in first out, push() and pop()
//a stack never adds or removes form the front the an array it only does this at the end 
//this prevents each index of the array needing to be re-indexed each time a new index is added

let stackArr = [1, 2, 3]
console.log(stackArr)

stackArr.push(4)            //add to end (index 3)
console.log(stackArr)

stackArr.pop()              //remove from end (index 3)
console.log(stackArr)

function factorial(x) {
    console.log("run")
    if (x === 0) {
        console.log("return")
        return 1
    }
    return x * factorial(x - 1)
}
console.log(factorial(4))

//web history example
let webHistory = []
webHistory.push("www.google.co.nz")
console.log(webHistory)

webHistory.push("www.MDN.com")
console.log(webHistory)

webHistory.push("www.gitbook.com")
console.log(webHistory)

//Queue
//A que is simmilar to a stack, it uses first in first out, push() and shift()
//data is always added to the end and retieived from the front
//Queues are used when data needs to be used in order, eg first job gets done first, second second and ect

let queueArr = [1, 2, 3]
console.log(queueArr)

queueArr.push(4)            //adds to end (index 3)
console.log(queueArr)

queueArr.shift()            //remove from front (index 0)
console.log(queueArr)

//Enqueue and Dequeue
//enqueue: add the begingin of queue and remove form end
//dequeue: add from end of queue and remove from start

//Linked lists
//A linked lists is a series of nodes, each node contains the name of the next or/and previous node and some data.
//the benifit of linked lists is that they can be stored anywhere in memeory and have no limit to size.
//the drawbacks of linked lists is that to access a node you need to cylce through each proir node until you find the one you want.
//because of this accessing and editing linked lists are slow due to the lack of random access.

//In JS linked lists are made by nesting each new node inside the next property of the last one.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//Manual example
let singlyLinkedList = new Node("Node 1");
singlyLinkedList.next = new Node("Node 2")
singlyLinkedList.next.next = new Node("Node 3")
singlyLinkedList.next.next.next = new Node("Node 4")
singlyLinkedList.next.next.next.next = new Node("Node 5")

console.log(singlyLinkedList)

//class example using head and tail
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(data) {
        let newNode = new Node(data)        //create newNode obj using Node template and 'data' parameter as data
        if (!this.head) {                   //if head has no value
            this.head = newNode                 //set head as newNode obj
            this.tail = this.head               //set tail as newNode obj
        } else {                            //else
            this.tail.next = newNode            //set next property of tail as newNode
            this.tail = newNode                 //set tail is newNode
        }
        this.length++                       //add 1 to length property
        return this                         //return edited list
    }
    removeTail() {
        if (!this.head) return undefined;    //if head is empty, return undefined
        let current = this.head;                //clone linked list to 'current' var
        let newTail = current;                  //set newTail as 'current' node
        //find second to last node in list
        while (current.next) {                //while current node's next property has a value, else dont run
            newTail = current;                  //set newTail as current list
            current = current.next;             //set current list as nested next node
        }
        this.tail = newTail                 //set list tail as newTail var
        this.tail.next = null;              //set next property of tail as null
        this.length--                       //subtract 1 from length prop
        if (this.length === 0) {              //if lenght is 0
            this.head = null                    //set head as null
            this.tail = null                    //set tail as null
        }
        return current                      //return editied list
    }
    index(index) {
        if (index < 0 || index >= this.length) return null; //if index parameter is less than 0 or equal or greater than list length
                                                            //return null
        let counter = 0;                    //set counter var
        let current = this.head;            //clone linked list to 'current' var
        while (counter != index) {          //while counter is not equal to index parameter
            current = current.next              //set current list as nested next node
            counter++                           //add 1 to counter
        }
        return current                      //return current var
    }
    edit(index,data){
        let editNode = this.index(index)      //set editNode var as desired index using index() func
        if(editNode){                       //if editNode has value
            editNode.data = data                //set editNodes data property as input data param
            return true                         //return true
        }
        return false                        //else return false
    }
}

singlyLinkedList = new SinglyLinkedList()
console.log(singlyLinkedList)

//adding nodes
singlyLinkedList.add("Node 1")
singlyLinkedList.add("Node 2")
singlyLinkedList.add("Node 3")
console.log(singlyLinkedList)

//viewing node at index
console.log(singlyLinkedList.index(1))

//editing node at index
singlyLinkedList.edit(1,"Edited node 2")
console.log(singlyLinkedList.index(1))

//removing end node
singlyLinkedList.removeTail()
console.log(singlyLinkedList)

