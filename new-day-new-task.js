// !==================JavaScript Practice Tasks=====================!//
 
//? 1. You are given an array of numbers. Print the second last element of the array.
console.log(`=======================Task 1=======================`)

let arr = [2,1,3,4,5];
console.log(`The Given Array is: `, ...arr);
console.log(`The second last element of the array is: `, arr[(arr.length-2)]);


//? 2. You are given an array of names of some cats. Check if the name "Bunny" exists in the array. 
//    If "Choma" is found, print "Hey Choma, I finally found you." 
//    Otherwise, print "Ohh, Choma where are you?"
console.log(`=======================Task 2=======================`)

let cats = ["Honey", "Bunny", "Lily"];

function findChoma(){ 
for(let item of cats){
    if(item==="Choma"){
        console.log("Hey Choma, I finally found you.");
        return;
    }
}
    console.log("Ohh, Choma where are you?");
}

findChoma();

//? 3. You are given an array of marks of 5 subjects, each out of 100. 
//    If the total marks are greater than 400, print "Pass". 
//    Otherwise, print "Fail".
console.log(`=======================Task 3=======================`)

let marks = [98,70,60,50,60];
let total_marks = marks.reduce((a,b)  =>  a+b , 0 )

console.log(`Total Marks is: ${total_marks}`);

total_marks>=400 ? console.log("Pass") : console.log("Fail");


//? 4. You are given an object with a person’s age. 
//    If the age is greater than 18, print "Adult". 
//    Otherwise, print how many years are needed to become an adult.
console.log(`=======================Task 4=======================`)

let persons = {
  person1: { 
    name: "Karim", 
    age: 19 
   },
  person2: { 
    name: "Rahim", 
    age: 21 
   },
  person3: { 
    name: "Salam", 
    age: 15 
  }
};

for(let item in persons) {
    if(persons[item].age>=18) {
        console.log(`${item} : ${persons[item].name} is Adult`)
    }
    else {
        let age = 18 - persons[item].age;
        console.log(`${item} : ${persons[item].name} need ${age} years to become adult`); 
    }
}


//? 5. You are given a number. 
//    Check whether the number is even or odd. 
//    You must use a function for this task.
console.log(`=======================Task 5=======================`)
function evenodd (num) {
    if(num%2===0) {
        console.log(`The number ${num} is a even number.`);
    }
    else{
       console.log(`The number ${num} is an odd number.`); 
    }
}

evenodd(5);
evenodd(8);



// 6. You are given a temperature value. 
//    If it is greater than 30, print "Hot". 
//    Otherwise, print "Normal". 
//    Using a function is mandatory.
console.log(`=======================Task 6=======================`)
function temp (num) {
    num>30 ? console.log("Hot") : console.log("Normal");
}

temp(38);
temp(20);
