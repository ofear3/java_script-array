// ? ================================================= ?//

// ! ARRAY DECLARATION AND  SUM OF THE ARRAY !//

let num_array = [1,2,3,4,5,6,7];

let sum = 0;

num_array.forEach((item) => {
    sum+=item;
    // todo console.log("The 1st item is: " + item);
})

// todo console.log("The sum of the num_array is: " + sum);

// ? ================================================= ?//

// ! Insert an Element within an ARRAY using push () !//

let array = [2,3,4,5];
let num = 1;
array.push(num);
// todo console.log(array);
// todo console.log(typeof array);
num = 0 ;
array[0] = num;
// todo console.log(array);

// ? ================================================= ?//

// ! Insert an Element within an 1st index of an array using unshift() !//

array = [1,2,3,4,5,6];
num = 0;
array.unshift(num);
// todo console.log(array);

// ? ================================================= ?//

// ! Display Array without 1st index of an array using shift() !//

array = [0,1,2,3,4,5];
// todo console.log("The array is: ", array);
let array_first_element = array.shift();
// todo console.log("The first element is: ", array_first_element);
// todo console.log("Updated Array is: ",array);

// ? ================================================= ?//


// ! Reverse and Sorting of an ARRAY !//

array=[1,2,3,4,5,6,7];
// todo console.log("Actual Array : " + array);
array.reverse();
// todo console.log("Reverse array is: " + array);
array.sort();
// todo console.log("Again the sorted array is: " + array);