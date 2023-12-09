/** Callbacks, Promises etc.
 * Source: Callback: https://javascript.info/callbacks */

// Inserting an extra script-tag: More functions etc.
// Without callback function
/*function loadScript (src) {
    setTimeout(() => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
    }, 2000);
}*/

// With callback function
function loadScript (src, callback) {
    setTimeout(() => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);

        // onload-event
        // script.onload = function () {
        //     console.log("Script loaded properly!");
        // };
        script.onload = () => callback(null, script);

        // onerror-event
        // script.onerror = function () {
        //     console.log("Error loading: " + this.src);
        // };
        script.onerror = () => callback(new Error(`Script load error for ${src}`));
    }, 1000);
}

// Calling function without callback
//loadScript("scripts/callback-external-scripts.js");

// Calling function with callback
loadScript("scripts/callback-external-scripts.js", function(error, script) {
    if (error) {
        console.log(error);
    } else {
        // Call functions from the loaded script here
        logDateTime();
    }

});

console.log("Waiting, ...")



// Function for extra script cannot be call, because it is not yet loaded.
// logDateTime();


