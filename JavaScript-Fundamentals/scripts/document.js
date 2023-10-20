// // get the element
// let elem = document.getElementById('elem');
//
// // make its background red
// elem.style.background = 'green';
//
//
// let elemSelectedAll = document.querySelectorAll('ul > li:last-child');
// console.log(elemSelectedAll);
//
//
// for (let elem of document.body.children) {
//     console.log(elem);
// }
//
// // let table = document.getElementById("age-table")
// /**  */
// console.log("1");
// console.log(document.querySelectorAll("#age-table label"));
//
// console.log(document.querySelector("td:first-child"));
//
// console.log(document.querySelector('form[name="search"]'));
//
// console.log(document.querySelector('input'));
//
// let check = document.body.children;
// console.log(check);
//
// for (child of check) {
//     console.log(child);
// }
//
// let myElem = document.getElementById('1');
// console.dir(myElem);
// console.log(myElem);
// console.log(`NodeType = ${myElem.nodeType}`);
// console.log( document.body.children[0].nodeName );
// console.log( document.body.children[1].id );
//
// console.log( document.querySelector('li').outerHTML );
//
//
// // for (child of document.body.children) {
// //     console.log(child.nodeName);
// // }
//
//
// allElem = document.querySelectorAll('*');
// console.log(allElem);
//
// let i = 0;
// for (elem of allElem) {
//     console.log(`> ${i} > ${elem.nodeName}`);
//     i++;
// }
//
// let div = document.createElement('div');
// let textNode = document.createTextNode('Here I am');
//
// // 1. Create <div> element
// let myDiv = document.createElement('div');
//
// // 2. Set its class to "alert"
// myDiv.className = "alert";
//
// // 3. Fill it with the content
// myDiv.innerHTML = "<strong>Hi there!</strong> You've read another important message.";
//
// // 4. Insert new element into document
// document.body.append(myDiv);
// document.body.children[1].before(myDiv);
// document.body.children[2].after(myDiv);
//
//
// console.log(myDiv);
//
// // for (i = 0; i < document.body.children.length; i++) {
// //     document.body.children[i].append(myDiv.outerHTML);
// // }
//
// /** Test */
//
// /** Frage 1 */
// function getMonthlyWage(yearly, pensum, thirteen) {
//     if (yearly <= 0 || pensum <= 0 || pensum > 100) {
//         return monthyWage = "false";
//     } else {
//         if (thirteen == false) {
//             return monthyWage = Math.round(yearly*(pensum/100)/12);
//         } else {
//             return monthyWage = Math.round(yearly*(pensum/100)/13);
//         }
//     }
// }
// getMonthlyWage(72000, 100, false);
// console.log(`Monthly wage 1 = ${monthyWage}`);
// getMonthlyWage(79300, 50, true);
// console.log(`Monthly wage 2 = ${monthyWage}`);
// getMonthlyWage(58500, 80);
// console.log(`Monthly wage 3 = ${monthyWage}`);
// getMonthlyWage(121212, 90);
// console.log(`Monthly wage 4 = ${monthyWage}`);
// getMonthlyWage(-5000, 80);
// console.log(`Monthly wage 5 = ${monthyWage}`);
// getMonthlyWage(79300, 0, true);
// console.log(`Monthly wage 6 = ${monthyWage}`);
//
//
// /** Frage 2 */
// const prename = "Jamie";
// const lastname = "Muster";
// let age = 38;
// let money = 42.50;
// let is_retired = false;
//

/** Frage 3 */
function countVowelsAndConsonants(testString) {
    //console.log(testString);
    // let vowels = ["A", "E", "I", "Y", "O","U", "Ä", "Ö", "Ü", "SS", "ß"];
    let vowels = ["a", "e", "i", "y", "o","u", "ä", "ö", "ü"];
    let marks = ["", " ", ".", ",","!", "?", "„", "“", ":"];
    let iv = 0;
    let ic = 0;

    for (let i = 0; i < testString.length; i++) {
        testString = testString.toLowerCase();

        if (vowels.includes(testString[i])) {
            //console.log(`${i}: ${testString[i]} --> vowel`);
            iv++;
            //console.log(`iv = ${iv}`);
        } else {
            if(marks.includes(testString[i])) {
                //console.log(`${i}: ${testString[i]} --> mark`);
                continue;
            } else {
                //console.log(`${i}: ${testString[i]} --> consonant`);
                ic++;
                //console.log(`ic = ${ic}`)
            }

        }

    }
    return [iv, ic];
}


// const [v, c] = countVowelsAndConsonants("Was ist das?");
// console.log(`${v}-${c}`)
// 3-6
// 3-6
//
//
// const [v, c] = countVowelsAndConsonants("Franz jagt im komplett verwahrlosten Taxi quer durch Bayern");
// console.log(`${v}-${c}`)
// 17-34
// 17-34
//
//
// const [v, c] = countVowelsAndConsonants("sCHÖferHOfEr wÄIzön Lüschyt DÜN dirscht");
// console.log(`${v}-${c}`)
// 11-24
// 11-24
//
//
// const [v, c] = countVowelsAndConsonants("Vogt Nyx: „Büß du ja zwölf Qirsch, Kämpe!“");
// console.log(`${v}-${c}`)

const [v, c] = countVowelsAndConsonants("Vogt Nyx: „Büß du ja zwölf Qirsch, Kämpe!“");
console.log(`${v}-${c}`);

/** */
// let test1 = document.getElementById("test-1").innerHTML;
// console.log(test1);

// document.getElementById("test-1").innerHTML = "toller test!";

