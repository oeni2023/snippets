//  load JSON

function loadJSON (file, callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status == '200') {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

loadJSON('res/name.json', function(text) {
    const data = JSON.parse(text);
    console.log(data);
})

// Read
const todos = '[{"userId":1,"id":1,"title":"delectus aut autem","completed":false},{"userId":1,"id":2,"title":"quis ut nam facilis et officia qui","completed":false},{"userId":1,"id":3,"title":"fugiat veniam minus","completed":false},{"userId":1,"id":4,"title":"et porro tempora","completed":true},{"userId":1,"id":5,"title":"laboriosam mollitia et enim quasi adipisci quia provident illum","completed":false},{"userId":1,"id":6,"title":"qui ullam ratione quibusdam voluptatem quia omnis","completed":false}]';

const data = JSON.parse(todos);
console.log(data);