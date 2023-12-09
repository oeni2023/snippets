/** FETCH */

/** Source */


//let promise = fetch(url, [options])


// (async () => {
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//
//     let response = await fetch(url);
//
//     if (response.ok) {
//         // if HTTP-status is 200-299
//         // get the response body
//
//         let json = await response.json();
//         let outMessage = document.getElementById("outmessage");
//         outMessage.innerText = "HTTP status: " + response.status;
//     } else {
//         let outMessage = document.getElementById("outmessage");
//         outMessage.innerText = "HTTP_Error: " + response.status;
//     }
// }) ()



// (async () => {
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//     let response = await fetch(url);
//
//     let commits = await response.json();
//     console.log(commits[0].author.login);
// })()


// (async () => {
//     let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
//
//     let text = await response.text();
//
//     const outmessage = document.getElementById("outmessage");
//
//     outmessage.innerText = text.slice(0, 80) + '...';
// })()

(async () => {
    //let response = await fetch('res/pattern.svg');
    let response = await fetch('res/boot.jpg');
    let blob = await response.blob();
    let img = document.createElement('img');
    let outputElement = document.getElementById("outmessage");
    //img.style = 'position:fixed;top:10px;left:10px;width:100px';

    //document.body.append(img);
    outputElement.append(img);
    console.log("Check");

    img.src = URL.createObjectURL(blob);
    setTimeout(() => {
        img.remove();
        URL.revokeObjectURL(img.src);
    }, 3000);
})()


/*  ---   ---   ---   ---  *
// */

const url = 'https://github.com/javascript-tutorial/en.javascript.info/blob/master/1-js/11-async/03-promise-chaining/user.json';
"use strict";
fetch(url)
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        console.log(text)
    });

fetch(url)
    .then(response => response.json())
    .then(user => console.log(user.name));

