/** Promises */

// callback based
// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
function loadScript (src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

loadScript('scripts/test.js', function(error, script) {
    if (error) {
        console.log(error);
    } else {
        console.log("no error")
    }

});
// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-


// Promise based
function loadScriptPromise (src) {
    return new Promise(function (resolve, reject) {
       let script = document.createElement('script');
       script.src = src;

       script.onload = () => resolve(src);
       script.onerror = () => reject(new Error(`Script load error for ${src}`));

       document.head.append(script);
    });
}

let promise = loadScriptPromise('scripts/test.js');

promise.then (
    script => console.log(`${script} is loaded`),
    error => console.log(`Error: ${error.message}`)
);

promise.then( script => console.log("Another handler"));



// ..... Tasks from Tutorial
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay (3000).then(() => console.log('runs after 3 seconds'));