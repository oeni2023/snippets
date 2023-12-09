

const date = new Date(Date.now());
const formattedDate = date.toLocaleString();
const textMessage = "Script properly loaded!";

function logDateTime () {
    console.log(`[${formattedDate}] -- ${textMessage}`);
    // console.log(date);
}
