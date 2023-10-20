/** Create new object user */
let user = {};
let user1 = new Object();

/** Add the property "name" */
user.name = "John";
user.surname = "Smith";
user.newName = "Pete";
delete user.newName;

/** Check for emptiness*/

function isEmpty(obj) {
    if (obj === null) {
        //console.log("Check EMPTY!");
    } else {
        //console.log("Check NOT empty!");
    }
}

let schedule = {};
console.log( "check 1 " + isEmpty(schedule) );

schedule["8:30"] = "get up";
console.log( "check 2 " + isEmpty(schedule) );


/** Check the output*/
console.log(user)
