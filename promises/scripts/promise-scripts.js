/** Promises */

// Promise constructor
/*let templatePromise = new Promise(function (resolve, reject) {
    // executor (the producing code, "singer") --> Code goes only here
    // "resolve" and "reject" are callbacks
    // When executor obtains the result, it calls resolve (value) oder reject(error)
    // Pronnise object has the following properties:
    // - state: "pending" --> initially; "fulfilled" --> when resolve is called; "rejected" --> when reject is called
    // - result: "undefined" --> initially; "value" when resolve (value) is called; "error" --> when reject(error) is called
});*/


let promiseResolve = new Promise (function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

console.log(promiseResolve);


let promiseReject = new Promise (function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops! promiseReject")), 1000);
});

console.log(promiseReject);

/*
let promise = new Promise (function (resolve, reject) {
    setTimeout(() => {
        resolve("done");
        console.log("Output production function.");
    }, 1000);

});*/


// Consumers .then and .catch
const promiseThen = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //resolve("done")
        reject(new Error("Whoops 'then'!"));
        console.log("gotcha! promiseThen");
    }, 2000);
})

promiseThen.then (
    function (result) {
        console.log("Successful! promiseThen");
    },
    function () {
       console.log("Rejected! promiseThen");
    }
);

let promiseCatch = new Promise((resolve, reject) => {
    setTimeout(() =>
        reject(new Error("Whoops 'catch'!")),
        1000);
});

promiseCatch.catch(console,log("Rejected! promiseCatch"));
promiseCatch.then(null, function () {
    console.log("Rejected! promiseCatch");
})

// finally .....
// .....


