/* Call this function for inserting a new span element with text to be displayed on screen */
function insertSpan(textToShow) {
    /* define wrapper element to insert new output element in */
    const outWrapper = document.getElementById('output-wrapper');
    /* Define new output element to insert in page */
    const outputUrlElement = document.createElement('span');
    /* Define text to be shown */
    outputUrlElement.innerText = textToShow;
    /* Append new output element to wrapper */
    outWrapper.append(outputUrlElement);
    /* Append a line break */
    outWrapper.appendChild(document.createElement("br"));
}

/* Call this function to remove inserted elemetns prior to insert new ones by hitting the fetch button*/
function removeElem() {
    /* define wrapper element to insert new output element in */
    const outWrapper = document.getElementById('output-wrapper');
    outWrapper.innerHTML = ';'
}

const text = "Test";
insertSpan(text);