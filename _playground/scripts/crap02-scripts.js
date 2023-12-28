/** Callback, Promises, async / Await
 * Source: https://www.w3schools.com/js/js_callback.asp */

/** Callback */
/** "I will call back later!"
 * A callback is a function passed as an argument to another function.
 * This technique allows a function to call another function.
 * A callback function can run after another function has finished */

//create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display result
document.getElementById("result").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

/** Asynchronous JavaScript
 * Source: https://www.w3schools.com/js/js_asynchronous.asp */

/** "I will finish later!"
 * Functions running in parallel with other functions are called asynchronous.
 * A good example is JavaScript setTimeout()
 * */

setTimeout(myFunction02, 3000);

function myFunction02 () {
    document.getElementById("result02").innerHTML = "I love you !!";
}

// --- ---- ---- ---
setInterval(myFunction03, 1000);
function myFunction03 () {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let d = new Date();
    document.getElementById("result03").innerHTML =
        weekday[d.getDay()] + ", " +
        d.getDate() + "." +
        d.getMonth() + "." +
        d.getFullYear() + " - " +
        d.getHours() + ":" +
        // d.getMinutes() + ":" +
        (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ":" +
        (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
}

/** Promises */
/** "I Promise a Result!"
 * "Producing code" is code that can take some time
 * "Consuming code" is code that must wait for the result
 * A Promise is a JavaScript object that links producing code and consuming code
 */

/** Source: https://www.w3schools.com/js/js_promise.asp*/

function myDisplayer(some) {
    document.getElementById("result04").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;

    // The producing code (this max take some time)
    if (x ===0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then (
    function (value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

// set Timeout
let myPromise02 = new Promise (function  (myResolve, myReject) {
    setTimeout (function() {myResolve("I love You !!");}, 3000);
});

myPromise02.then(function(value) {
   document.getElementById("result05").innerHTML = value;
});


/** Modal imgae
 */

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

img.addEventListener('click',() => {
    modal.style.display = "block";
    modalImg.src = "res/img_snow.jpg" //this.src;
    captionText.innerHTML = "Snow" //this.alt;
});
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}