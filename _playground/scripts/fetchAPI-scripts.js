/* Tutorial from :https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444 */
"use strict";

/** Define variables
 * */

/* Request parameters */
const url = "https://web-modules.dev/api/v1/products";
const accessToken = "Bearer 214|pfZEMZSEbfSoaVPmVmTiOIH0fU0F2twJ1F1yGQjF";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", accessToken);

/* HTML elements */
const heading = document.querySelector('.result-panel > h1');
const btnFilterAll = document.querySelector('.filter-all-button');
const btnFilterTransport = document.querySelector('.filter-transport-button');
const btnFilterFurniture = document.querySelector('.filter-furniture-button');
const btnFilterGaming = document.querySelector('.filter-gaming-button');
const templateProducts = document.querySelector('.product-template');
const resultsElement = document.querySelector('.results');


/** EventListener
 * */
/* Load eventListener  */
window.addEventListener('load', () => {
    /* Load data form API */
    /* Producing code */
    const myProducts = fetchData(url);


    /* Consuming code */
    myProducts.then(response => {
        /* Printing response to console */
        console.log(response);
        /* Return response as JSON to next promise */
        return response.json()
    }).then(object => {
        /* Printing response body to console */
        console.log(object);
        /* Extracting data (products) from response body */
        const products = object.products;
        /* Printing products to console */
        console.log(products);

        /* Creating product cards */
        /* Test createCard function */
        createCard(products);

        /* Creating eventListener for filter buttons */
        /* Filter All */
        btnFilterAll.addEventListener('click', () => {
            console.log('All');
            console.log(products);
            //heading.classList.add('hidden');
            /* render filter cards */
            createCard(products);
        })

        /* Filter Transport */
        btnFilterTransport.addEventListener('click', () => {
            console.log('Transport');
            const transport = products.filter((products) => products.category.name === 'Transport');
            console.log(transport);
            /* render filter cards */
            createCard(transport);
        })

        /* Filter Furniture */
        btnFilterFurniture.addEventListener('click', () => {
            console.log('Furniture');
            const furniture = products.filter(products => products.category.name === 'Möbel');
            console.log(furniture)
            /* render filter cards */
            createCard(furniture);
        })

        /* Filter Gaming */
        btnFilterGaming.addEventListener('click', () => {
            console.log('Gaming');
            const gaming = products.filter(products => products.category.name === 'Gaming');
            console.log(gaming);
            /* render filter cards */
            createCard(gaming);
        })

    });
});


/** Fetch data from API
 *
 * @param url
 * @returns {Promise<Response>}
 */
function fetchData(url) {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders
    };
    return fetch(url, requestOptions);
}


/** Create card from API-data
 *
 * @param apiData
 */
function createCard(apiData) {
    /* Check if data form request exist */
    if ( apiData && apiData.length > 0 ) {
        /* Check if browser supports <temple> */
        if ( 'content' in document.createElement('template') ) {
            if ( templateProducts ) {
                /* Remove all existing elements */
                resultsElement.innerHTML = '';
                /* Loop over data */
                apiData.forEach(item => {
                    /* Clone template */
                    const productCardClone = templateProducts.content.cloneNode(true);
                    /* Populate elements of card-clone with API-data */
                    productCardClone.querySelector('.product-name').innerText = item.name;
                    resultsElement.appendChild(productCardClone);
                });
            } else {
                throw  new Error('HTML-template-element does not exist!')
            }
        } else {
            throw new Error('Browser does not support HTML-template-element!');
        }
    } else {
        throw new Error('Data not ok!')
    }
}

const price = 14340;

// Format the price above to USD using the locale, style, and currency.
let CHFFrancs = new Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency: 'CHF',
});

console.log(`The formated version of ${price} is ${CHFFrancs.format(price)}`);
// The formated version of 14340 is $14,340.00