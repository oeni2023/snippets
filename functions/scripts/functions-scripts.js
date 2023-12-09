// normal functions
function writeLog () {
    console.log(`Normal function!`);
}

writeLog();

// normal function with arguments
function writeLogArg (arg) {
    console.log(`Normal function with argument: "${arg}"`);
}

writeLogArg("my argument");

// function expression
const funcExp = function () {
    console.log("Function expression");
}

console.log(funcExp)
funcExp();


// arrow fundtions
let func = () => console.log(`Hello!`);
func();