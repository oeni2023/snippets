// let url = new URL('https://web-modules.dev/api/v1/feedback');
// const feedbackJson = {name : "Michael", email : "hallo@test.ch", rating_design : 21,  rating_components : 8, comment : "Test"};
// const options = {method : "POST", headers :{ Authorization : 'Bearer 207|Dywaen1RhfQ0Dc8tDgKXUKgOdGh7P8xWX9WiQtwM'}};
//
// postFeedback(url, options, feedbackJson);
//
// async function postFeedback (url, options, feedbackJSON){
//     url.search = new URLSearchParams(feedbackJSON).toString();
//     console.log(url.search);
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

//---------
// let url = new URL('https://web-modules.dev/api/v1/feedback');
// const feedbackJson = {
//     name: "Michael",
//     email: "hallo@test.ch",
//     rating_design: 21,
//     rating_components: 8,
//     comment: "Test"
// };
//
// const options = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json', // Specify JSON content type
//         Authorization: 'Bearer 207|Dywaen1RhfQ0Dc8tDgKXUKgOdGh7P8xWX9WiQtwM'
//     },
//     body: JSON.stringify(feedbackJson) // Convert JSON data to a string for the body
// };
//
// postFeedback(url, options);
//
// async function postFeedback(url, options) {
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }


// --------------
// var xhr = new XMLHttpRequest();
// var url = "https://web-modules.dev/api/v1/products";
// xhr.open("GET", url, true);
// xhr.onreadystatechange= function() {
//     if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         var json = JSON.parse(xhr.responseText));
//         // ...
//     }
// };
// xhr.setRequestHeader("Authorization", "Bearer YOURTOKEN");
// xhr.send(null);
// Die moderne Variante ist allerdings die fetch() API des Browsers. Mit dieser Variante sieht der gleiche Call wie folgt aus:

// fetch('https://web-modules.dev/api/v1/feedback', {
//     headers : {
//         Authorization: 'Bearer 207|Dywaen1RhfQ0Dc8tDgKXUKgOdGh7P8xWX9WiQtwM' // Part nach "Bearer " mit eigenem Token ersetzen
//     }
// })
//     .then( result => result.json())  // JSON aus der Antwort annehmen
//     .then( json => {
//         console.log(json)
//         // Verarbeitung der Daten
//     })
//     .catch( error => {
//         // Fehlerbehandlung
//     })


// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer 207|Dywaen1RhfQ0Dc8tDgKXUKgOdGh7P8xWX9WiQtwM");
//
// var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     redirect: 'follow'
// };
//
// fetch("https://web-modules.dev/api/v1/feedback?name=Nils&email=abc@def.ch&rating_design=15&rating_components=10&comment=Hallo", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('eRRor', error));




/* ------------------- */
/* Die Lösung */
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 214|pfZEMZSEbfSoaVPmVmTiOIH0fU0F2twJ1F1yGQjF");
myHeaders.append('accept', 'application/json');
var raw = "";

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    //redirect: 'follow'
};

fetch("https://web-modules.dev/api/v1/feedback?name=Frido&email=abc@def.ch&rating_design=15&rating_components=10&comment=Hallo", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

/* ------------------- */




// ------------------
// Annahme: Der ID-Wert ist 123 für den zu löschenden Eintrag
// const itemIdToDelete = 'id=3205';
//
// const url = `https://web-modules.dev/api/v1/items/${itemIdToDelete}`;
// const options = {
//     method: 'DELETE',
//     headers: {
//         Authorization: 'Bearer 207|Dywaen1RhfQ0Dc8tDgKXUKgOdGh7P8xWX9WiQtwM',
//         'Content-Type': 'application/json'
//     }
// };
//
// deleteItem(url, options);
//
// async function deleteItem(url, options) {
//     try {
//         const response = await fetch(url, options);
//
//         if (response.ok) {
//             console.log('Item deleted successfully');
//         } else {
//             const errorData = await response.json();
//             console.error('Error deleting item:', errorData);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }


// let url = new URL('https://web-modules.dev/api/v1/feedback');
// const feedbackJson = {
//     name: "Michael",
//     email: "hallo@test.ch",
//     rating_design: 21,
//     rating_components: 8,
//     comment: "Test"
// };
//
// const options = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json', // Specify JSON content type
//         Authorization: 'Bearer 207|Dywaen1RhfQ0Dc8tDgKXUKgOdGh7P8xWX9WiQtwM'
//     },
//     body: JSON.stringify(feedbackJson) // Convert JSON data to a string for the body
// };
//
// postFeedback(url, options);
//
// async function postFeedback(url, options) {
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
