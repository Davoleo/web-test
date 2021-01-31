const request = new XMLHttpRequest();
request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
request.onload = ev => {
    const obj = JSON.parse(request.responseText);
    console.log(obj);
}
request.send();