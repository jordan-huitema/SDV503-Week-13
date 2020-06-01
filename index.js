
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
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}

singlyLinkedList = new SinglyLinkedList()
console.log(singlyLinkedList)

singlyLinkedList.add("Node 1")
singlyLinkedList.add("Node 2")
singlyLinkedList.add("Node 3")
console.log(singlyLinkedList)