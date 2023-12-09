
/* Define HTML elements needed */
const parentElement = document.getElementById('result-div');
const btnClick = document.getElementById('my-button');
const elementType = 'div';
const elememtText = "Hallo div ";
const elementClass = 'my-alert';
const elementBgColor = "#ffdcdc;"
const elementBorder = "solid red 3px";

/* Define eventListener */
btnClick.addEventListener('click',() => {
    console.log('Hello!!!')

    /* Instantise a new HtmlGenerator Object */
    const myTile = new HtmlGenerator(elementType, elememtText);

    myTile.addClass(elementClass);
    myTile.addClass('result');

    myTile.addSpan('NewAttribut');

    myTile.setBgColor('#1234');

    myTile.setBorderStyle("blue solid 3px");

    /* Add new element to DOM */
    myTile.appendTo(parentElement);




})


/* Class definition */
class HtmlGenerator {
    constructor(tagName, textContent) {
        this.element = document.createElement(tagName);
        this.element.textContent = textContent || '';
    }

    addClass(className) {
        this.element.classList.add(className);
    }

    addSpan(nameAttributeValue) {
        const mySpan = document.createElement('span');
        mySpan.innerText = 'Hallo span'
        mySpan.setAttribute('name', nameAttributeValue)
        this.element.appendChild(mySpan);
    }

    setAttributes(attributeName, attributeValue) {
        this.element.setAttribute(attributeName, attributeValue);
    }

    setBgColor(bgColor) {
        this.element.style.backgroundColor = bgColor;
    }

    setBorderStyle(borderStyle) {
        this.element.style.border = borderStyle;
    }

    appendTo(parentElement) {
        parentElement.appendChild(this.element);
    }
}

 /*

    addClass(className) {
        this.element.classList.add(className);
    }

    setAttribute(attributeName, attributeValue) {
        this.element.setAttribute(attributeName, attributeValue);
    }

    setBorderStyle(borderStyle) {
        this.element.style.border(borderStyle);
    }

*/