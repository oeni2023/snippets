/*
function runPromise(){
    return new Promise((reject, resolve) => {
        const numb = Math.random();
        if(numb >= 0.5){
            resolve(numb, true);
        }else{
            reject(numb);
        }
    });
}


runPromise()
    .then((dataFromResolve, boolInfo) => {
        console.log(`Yay, resolved ${boolInfo ? 'yay' : 'nay'}`);
        console.log(dataFromResolve);
        return Math.random();
    })
    .then((newNumber) => {
        console.log(newNumber);
        return Math.random();
    })
    .then(nn => console.log(nn))
    .catch((number) => {
        console.log(`Rejected. Number was ${number}`);
    });
*/





/*  */
const myPromise = fetch(`https://api.thecatapi.com/v1/images/search`);
console.log(myPromise);

myPromise.then((response) => {
    console.log(response);
    return response.json();
})
    .then((url) => {
        console.log(url)
    });