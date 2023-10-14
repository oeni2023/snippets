/** while- loop */
// While the condition is truthy, the code from the loop body is executed.

/*let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert (i);
    i++;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy and the loop stops
    alert(i);
    i--;
}*/

/** do .. while-loop */
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again. This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy.

/*
let i = 0;
do {
    alert(i);
    i++;
} while (i < 3);
*/

/** for-loop */
//
// begin:	let i = 0	Executes once upon entering the loop.
// condition:	i < 3	Checked before every loop iteration. If false, the loop stops.
// body:	alert(i)	Runs again and again while the condition is truthy.
// step:	i++	Executes after the body on each iteration.

/*
for (let i = 0; i < 3; i++) { // shows 0,then 1, then 2
    alert(i);
}*/

/*
let i = 3;

while(i) {
    prompt(i--);
}*/

// let i = 0;
// while (++i < 5) {
//     alert(i);
// }
/** Output:
 * 1, 2, 3, 4
 *
 * */

// let i = 0;
// while (i++ < 5) {
//     alert(i);
// }
/**
 * Output: 1, 2, 3, 4, 5
 * */

// for (let i = 0; i < 5; i++) {
//     alert(i);
// }
/**
 * Output: 0, 1, 2, 3, 4*/

// for (let i= 0; i < 5; ++i) {
//     alert(i);
// }
/**
 * Output: 0,   1, 2, 3, 4, 5
 * */

/** Use the for loop to output even numbers from 2 to 10. */
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i + " is an even number!");
//     }
// }

// for (let i = 0; i < 3; i ++) {
//     alert(`number ${i}!`);
// }
/**
 * Output: 0, 1, 2
 * */

// let i = 0;
// while (i < 3) {
//     alert(`while number ${i}!`);
//     ++i;
// }
/**
 * Output: 1, 2, 3
 *
 */

// let myNumber = +prompt("Enter a number!");
// while(myNumber < 100 || myNumber) {
//     alert(`Nope, your number ${myNumber} is not the one I'm looking for. Try again!`);
//     myNumber = +prompt("Enter a number!");
// }
// alert(`Well done! Your number ${myNumber} is equal or greater than 100!`)

// OR ||
// alert (` true || true is: ${true || true}`);
// alert (` false || true is: ${false || true}`);
// alert (` true || false is: ${true || false}`);
// alert (` false || false is: ${false || false}`);

// OR || finds the first truthy value
// let firstName ="";
// let lastName ="";
// let nickName ="SupperCoder";
//
// alert(firstName || lastName || nickName || "Anonymous");

// AND &&
// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// AND && finds the first falsy value
// let firstName ="";
// let lastName ="";
// let nickName ="SupperCoder";
//
// alert(firstName && lastName && nickName && "Anonymous");

// let startNum = 1;
// let endNum = 10;
// for (let i = startNum; i < endNum; i++) {
//     if (i % 2 != 0 || i % 3 != 0 || i % 5 != 0 ) {
//         alert(i);
//     }
//
//
// }

// let n = 10;
// nextPrime:
//     for (let i = 2; i <= n; i++) { // for each i...
//         console.log(`########## RUN ${i - 1} ##########`)
//         console.log(`i = ${i}`)
//
//         for (let j = 2; j < i; j++) { // look for a divisor..
//             console.log(`j = ${j}`)
//             console.log(`${i} % ${j} = ${i % j}`)
//             if (i % j == 0) {
//                 console.log(`${i} % ${j} == ${i % j} --> NOT a prime!`)
//                 continue nextPrime;
//             } // not a prime, go next i
//         }
//
//         // alert( i ); // a prime
//         console.log(`${i} --> PRIME!`)
//     }



/**
 * Type conversion */
let value = true;
console.log(`value = ${typeof value}`);

value = String(value);
console.log(`value is now = ${typeof value}`)

// ######################## TEST AREA TEST AERA ......
// let num;
// alert(num);

// let n = 1;
// alert(n % 2);