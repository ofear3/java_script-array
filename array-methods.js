//=====================================================================================================================//
//todo=============================================🟢 PRACTICE SET – 1: Array Fundamentals=================================todo//
//=====================================================================================================================//

// ! Q1. Sum of an Array !//

// ? You are given an array of numbers.
// ? Task: Calculate the total sum of all the elements in the array.

let numbers = [1,2,3,4,5,6,7,8,9,10] ;
let sum = 0;
numbers.forEach((item) => {
    sum+=item;
});
console.log("The sum of the numbers is: " + sum);

//===================================================================================//

// ! Q2. Filter Even Numbers !//

// ? You are given an array of integers.
// ? Task: Create a new array that contains only the even numbers from the original array.

let arr1 = [1,2,3,4,5,6,7,8,9,10];

function even(item){
    if(item%2==0) return item;
}

let arr2 = arr1.filter(even);

console.log("The original array is: " + arr1);
console.log("The even number new array is: " + arr2);

//===================================================================================//

// ! Q3. Transform Array Values !//

// ? You are given an array of numbers.
// ? Task: Create a new array where each element is doubled from the original array.

let number_array = [1,2,3,4,5];

function double_num(item) {
    return item*2;
}

let double_array = number_array.map(double_num);

console.log("The original array is: " + number_array);
console.log("New array is: " + double_array);


//=====================================================================================================================//
//todo =============================================🟡 PRACTICE SET – 2: Array Methods Logic===============================todo//
//=====================================================================================================================//

// ! Q4. Numbers Greater Than a Value !//

// ? You are given an array of numbers.
// ? Task: Create a new array that contains only the numbers greater than 10.

let arr = [7,8,9,10,11,12,13,14,15,15];

function greater(item) {
    if(item>10) return item;
}

let newarr = arr.filter(greater);
console.log("The original array is: " + arr);
console.log("Numbers Greater than 10 are: " + newarr);

//===================================================================================//

// ! Q5. Find the First Matching Element !//

// ? You are given an array of numbers.
// ? Task: Find the first element in the array that is greater than 50.

let narray = [30,40,50,60,70,80,80];
function find_Element(item) {
    if(item>50) {
        return item;
    }
}

let marray = narray.find(find_Element);
console.log("The original array is: " + narray);
console.log("First matching Element: " + marray);

//===================================================================================//

// ! Q6. Calculate Average !//

// ? You are given an array of numbers.
// ? Task: Calculate the average value of all elements in the array.

let xnumbers = [1,2,3,4,5,6,7,8,9,10] ;
let ysum = 0;
xnumbers.forEach((item) => {
    ysum+=item;
});
let avg = ysum / xnumbers.length;
console.log("The sum of the numbers: " + xnumbers);
console.log("The average of the numbers is: " + avg);


//=====================================================================================================================//
//todo =============================================🔵 PRACTICE SET – 3: Arrays of Objects===============================todo//
//=====================================================================================================================//

// ! Q7. Filter Adult Students !//

// ? You are given an array of student objects.
// ? Each student has properties like name and age.

// ? Task: Create a new array that contains only the students whose age is 18 or above.

let std_obj_arr = [ 
    {id : 1, name: "saif", age : 20},
    {id : 2, name: "rabbi", age : 16},
    {id : 3, name: "shuvo", age : 22},
];

function ageValid(item) {
    return item.age >= 18;
}

let adultStudents = std_obj_arr.filter(ageValid);

console.log("Adult Students are: " , adultStudents);


//===================================================================================//

// ! Q8. Extract Property Values !//

// ? Using the same students array,
// ? Task: Create a new array that contains only the names of all students.

let Std_obj_arr = [ 
    {id : 1, name: "saif", age : 20},
    {id : 2, name: "rabbi", age : 16},
    {id : 3, name: "shuvo", age : 22},
];

function Name(std_name) {
    return std_name.name;
}

let Std_Name = Std_obj_arr.map(Name);

console.log("A new array that contains only the names of all students: ", Std_Name);

//===================================================================================//


// ! Q9. Calculate Total Cost !//

// ? You are given an array of product objects.
// ? Each product has price and quantity.

// ? Task: Calculate the total cost of all products
// ? (price × quantity for each product).

let product_objarr = [
    {
        product_name  : "Rice",
        product_price : 100,
        product_qnty  : 2 
    },

    {
        product_name  : "Water",
        product_price : 20,
        product_qnty  : 5   
    },
    
    {
        product_name  : "Kacchi",
        product_price : 400,
        product_qnty  : 1
    }
]
let total = 0, cost;
function total_cost (item) {
    cost = item.product_price * item.product_qnty;
    total += cost;
    console.log(item.product_name + " Total Price: " + cost);
}

let product_cost = product_objarr.map(total_cost);
console.log("Total price is: ", total);
