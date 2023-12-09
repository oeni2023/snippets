/** Testing AJAX
 * fetch API */

/* Define Elements in DOM */
const btnGetWmd = document.getElementById('button-Wmd');
const btnGetMtg = document.getElementById('button-Mtg');
const radioMethod = document.getElementsByName('request-method');


/* Define URLs to call */
const urlWmd = 'https://web-modules.dev/api/v1/feedback';
const urlMtg ='https://api.magicthegathering.io/v1/cards';

const myToken= 'Bearer 207|Dywaen1RhfQ0Dc8tDgKXUKgOdGh7P8xWX9WiQtwM';

const requestHeaders = new Headers();
requestHeaders.append('Authorization', myToken);
requestHeaders.append('accept', 'application/json');

const urlOptions = {
    method: getRequestMethod(),
    headers: requestHeaders
};

/* Define EventListener*/
btnGetWmd.addEventListener('click', () => {writeTest(urlWmd, urlOptions)});
btnGetMtg.addEventListener('click', () => {writeTest(urlMtg)});



async function writeTest(url, param01, param02, param03) {
    console.log(`Calling: ${url}`)
    const requestMethod = getRequestMethod();
    console.log(`Selected request method: "${requestMethod}"`);
    requestHeaders.append('method', requestMethod);
    //console.log(param01);

    try {
        let testResponse = await fetch(url, param01);
        console.log(" ---- GET ---- ");
        console.log(`Response status: ${testResponse.status}`);
        console.log(`Response ok: ${testResponse.ok}`);

        // Getting Response body
        if (testResponse.ok) {
            const jsonResponse = await testResponse.json();
            console.log(" ---- Response body ---- ");
            console.log(jsonResponse);
            //console.log(`Random Artist: ${jsonResponse.cards[getRandomNumber(0,100)].artist}`);

            // Getting Response headers
            console.log(" ---- Response headers ---- ");
            console.log(testResponse.headers);
            console.log(`Headers: ${testResponse.headers.entries().next().value}`);
            for (let [key, value] of testResponse.headers) {
                console.log(`${key} = ${value}`);
            }




        } else {
            throw new Error(`Response status: ${testResponse.status}`);
        }


    } catch (error) {
        console.error(error);
    }
}


/* Helper functions */
/* Create a random integer */
function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
}

/* Get Request method*/
function getRequestMethod() {
    let selectedMethod = "";
    for (let i = 0; i < radioMethod.length; i++) {
        if (radioMethod[i].checked) {
            selectedMethod = radioMethod[i].value;
            break;
        }
    }
    return selectedMethod;
}