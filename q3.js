// array
  
// const input = require("readline-sync");
// let A = [];
// let M = input.questionInt("enter the no. of element for A : ");
// for (let i=0; i<M; i++) 
// {
//     A[i] = input.questionInt("enter element for A array:")
// } console.log("Array A = ",A);

// let B = [];
// let N = input.questionInt("enter the no. of element for B : ");
// for (let i=0; i<N; i++) 
// {
//     B[i] = input.questionInt("enter element for B array:")
// }  console.log("Array B = ",B);


// let find=[];
// let k=0;
// for (let i=0; i<M; i++) 
// {
//     for (let j=0; j<N; j++) 
//     {
//         if (A[i]==B[j]) 
//         {
//             find[k]=A[i];
//             k++;
//         }
//     }
// } console.log(k);






/// WAP take positive integer n input. Print sum of the square of the first n natural num, use while loop .

// const input = require("readline-sync");

// let n = input.questionInt("Enter the number: ");

// let sum = 0;        // Initialize sum to 0

// for (let i = 1; i <= n; i++) 
// {
//     sum += i**2;    // Add the square of the current number to sum
// }

// console.log("The sum of the squares of the first", n, "natural numbers is:", sum);




// const input = require("readline-sync");

// let n = input.questionInt("Enter the number: ");

// let sum = 0;
// let i =1;

// while(i<=n)
// {
//     sum += i**2;
//     i++;
    
// } console.log(sum);





// // WAP find GCD of 3 num. the GCD / HCF of 2 or more num is the largest that divides each of them without leaving a reminder.


// const input = require("readline-sync");

// let num1 = input.questionInt("Enter the first number: ");
// let num2 = input.questionInt("Enter the second number: ");
// let num3 = input.questionInt("Enter the third number: ");

// let hcf;

// // Find minimum of three numbers to set the upper limit for loop
// let min = Math.min(num1, num2, num3);

// // Loop from 1 to minimum of the three numbers to find the greatest common divisor
// for (let i = 1; i <= min; i++) {
//     if (num1 % i === 0 && num2 % i === 0 && num3 % i === 0) {
//         hcf = i; // Update HCF if 'i' divides all three numbers
//     }
// }

// console.log("GCD / HCF of", num1 + ", " + num2 + ", and " + num3 + " is:", hcf);





// WAP JS program take array of integer as input & print true if the array is palandrome. 


// const input = require("readline-sync");

// let n = input.questionInt("Enter the number: ");
// let originalNumber = n;
// let reversedNumber = 0;
// let remainder;

// while (n > 0) {
//     remainder = n % 10;
//     reversedNumber = reversedNumber * 10 + remainder;
//     n = Math.floor(n / 10);
// }

// if (originalNumber === reversedNumber) {
//     console.log("Yes, it's a palindrome.");
// } else {
//     console.log("No, it's not a palindrome.");
// }









