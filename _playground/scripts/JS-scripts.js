/** Frage 1 */
function getMonthlyWage(yearly, pensum, thirteen) {
    if (yearly <= 0 || pensum <= 0 || pensum > 100) {
        return monthyWage = "false";
    } else {
        if (thirteen == false) {
            return monthyWage = Math.round(yearly*(pensum/100)/12);
        } else {
            return monthyWage = Math.round(yearly*(pensum/100)/13);
        }
    }
}


/** Frage 2 */
const prename = "Jamie";
const lastname = "Muster";
let age = 38;
let money = 42.50;
let is_retired = false;




/** Frage 3 */
function countVowelsAndConsonants(testString) {
    let vowels = ["a", "e", "i", "y", "o","u", "ä", "ö", "ü"];
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

    let iv = 0;
    let ic = 0;

    console.log(testString);
    testString = testString.toLowerCase();
    console.log(testString);
    console.log(testString[0]);

    for (let i = 0; i < testString.length; i++) {
        if (vowels.includes(testString[i])) {
            console.log(`${i}, iv: ${iv}, v: ${testString[i]}`)
            iv++;
        } else {
            if(consonants.includes(testString[i])) {
                console.log(`${i}, ic: ${ic}, c: ${testString[i]}`)
                ic++;
            } else {
                console.log(`${i} ERROR: ${testString[i]}`)
            }
        }
    }
    return [iv, ic];
}

// const [v, c] = countVowelsAndConsonants("Was ist das?");
// console.log(`${v}-${c}`);
//
// const [v, c] = countVowelsAndConsonants("Franz jagt im komplett verwahrlosten Taxi quer durch Bayern");
// console.log(`${v}-${c}`);
//
//
// const [v, c] = countVowelsAndConsonants("sCHÖferHOfEr wÄIzön Lüschyt DÜN dirscht");
// console.log(`${v}-${c}`);
//
//
const [v, c] = countVowelsAndConsonants("Vogt Nyx: „Büß du ja zwölf Qirsch, Kämpe!“");
console.log(`${v}-${c}`);
