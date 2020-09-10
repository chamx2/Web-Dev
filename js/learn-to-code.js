// var total = 10;

// for(var x = 0; x < total; x++ )
// {
//     console.log(x);
// }

// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// console.log(area1);

// function area(length, width) {
//     return length * width;
// }

// var area1 = area(15,10);
// console.log(area1);

// var rectangleAreas = []
// rectangleAreas.push(area(20,20));
// rectangleAreas.push(area(69,69));

// console.log(rectangleAreas);

// var bankBalance = 500;

// var transaction = function makeTransaction(priceOfProduct){
//     if(priceOfProduct <= bankBalance){
//         bankBalance -= priceOfProduct;
//         console.log("purchase successful!");
//     }
//     else{
//         console.log("insuffecient balance!");
//     }
// }

// console.log(bankBalance);

// transaction(10);

// var printCustomerName = function(first, last){
//     console.log("First Name: " + first + " Last Name: " +last);
// }



// var student0 = {
//     firstName: "John",
//     lastName: "Parker",
//     age: 7,
//     greeting: function(){
//         return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old!" ;
//     }
// };

// console.log(student0.firstName);
// console.log(student0.lastName);

// //Creates a new empty object
// var student1 = new Object();
// student1.firstName = " Johnny";
// student1.lastName = "Bravo";
// student1.age = "22";

// var student2 = {}
// student2.firstName = "Some";
// student2.lastName = "Last";
// student2.age = "99";

// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);

// //var students = ["John", "Jacob", "Jingle", "Heimer", "Vanessa"];

// for(var x = 0; x < students.length; x++)
// {
//     console.log(students[x]);
// }

var students = [];

function Student(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
       return "Hi, I'm " + this.firstName + " " + this.lastName + " and I'm " + this.age + " years old!";
    }
}


students.push(new Student("John", "Super", 26));
students.push(new Student("Johnny", "Bravo", 25));
students.push(new Student("Melissa", "Quinion", 24));
students.push(new Student("Solf", "Kimblee", 27));

for(var index = 0; index < students.length; index++)
{
    console.log(students[index].greeting());
}