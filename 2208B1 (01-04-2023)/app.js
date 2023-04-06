// class Car{
//     constructor(mod,col,num){
//         this.model=mod
//         this.color=col
//         this.number=num
//     }
//     model
//     color
//     number
//     display(){
// document.write(`The model of the car is ${this.model}, color of the car is ${this.color} and number is ${this.number}`)
//     }
//     makeSound(){
//         document.write(`${this.model} makes a sound of Vroom Vroom`)
//     }
// }
// document.write("<h1>Car 1 Data</h1>")

// let car1=new Car()
// car1.model="BMW"
// car1.color="red"
// car1.number="1234"
// car1.display()
// document.write("<br><h1>Car 2 Data</h1>")

// let car2=new Car()
// car2.model="Mehran"
// car2.color="white"
// car2.number="5678"
// car2.display()


// let car1=new Car("Civic", "Black",1234)
// let car2=new Car("Mehran","White",5678)
// car1.display()
// document.write("<br>")
// car2.display()
// document.write("<br>")
// car1.makeSound()
// document.write("<br>")
// car2.makeSound()




// let dog=new Animal("myDog",12)
// dog.sound="Bark"
// dog.makeSound()
// dog.display()
// class Dog extends Animal{
//     constructor(dogName,dogAge){
//         super(dogName,dogAge)
//     }
    
//     sound="Bark"
//     canMove(){
//         document.write(`${this.name} can move`)
//     }

// }

// let dog=new Dog("myDog",12)
// dog.canMove()


// class Animal{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     name
//     age
//     display(){
//         document.write(`The name of the animal is ${this.name} and age is ${this.age}`)
//     }
//     makeSound(){
//         document.write(`${this.name} makes a sound of ${this.sound}`)
//     }
// }
// class Cat extends Animal{
//     constructor(catName,catAge){
//         super(catName,catAge)
//     }
    
//     canSleep(){
//         document.write(`${this.name} can sleep`)
//     }
// }
// let cat1=new Cat("Tom",2)
// cat1.display()

//04-03-2023

// class Car{
//     constructor(mod,col,num){
//         this.model=mod
//         this.color=col
//         this.number=num
//     }
//     model
//     color
//     number
//     display(){
// document.write(`The model of the car is ${this.model}, color of the car is ${this.color} and number is ${this.number}`)
//     }
// }

// let c1=new Car(1997,"black","AAA-123")
// c1.display()

// class Mehran extends Car(){
//     constructor(mod,col,num){
//         super(mod,col,num)
//     }
// }

// let mehran1=new Mehran(1997,"black","AAA-123")
// mehran1.display()

// class firstClass {
//     add() {
//         console.log("First Method")
//     }
// }
// class secondClass extends firstClass {
//     add() {
//         console.log(30 + 40);
//     }
// }
// class thirdClass extends secondClass {
//     add() {
//         console.log("Last Method")
//     }
// }

// let ob1=new thirdClass()
// ob1.add()
// let ob2=new secondClass()
// ob2.add()

// class Demo{
//     constructor(stdName){
//         this.name=stdName
//     }
//     name
//     display(){
//         console.log(this.name)
//     }
//     canSleep(){
//         throw new Error("Sleep method must be implemented");
//     }
// }

// class Student extends Demo{
//     constructor(stdName,stdAge){
//         super(stdName)
//         this.age=stdAge
//     }
//     age
//     display(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }

// let s1=new Student("Ali",23)
// s1.display()

// let d1=new Demo("Ali")
// d1.display()
// d1.canSleep()

// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
    
//     makeSound() {
//       throw new Error('makeSound method must be implemented');
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name) {
//       super(name);
//     }
    
//     makeSound() {
//       console.log('Woof!');
//     }
//   }
  
//   const myDog = new Dog('Rufus');
//   myDog.makeSound(); // Output: "Woof!"

// class School{
//     #schoolName="Aptech"
// }
// class Student extends School{

// }

// let sc=new School()
// console.log(sc.#schoolName)







