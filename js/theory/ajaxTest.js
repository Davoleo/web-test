//AJAX := Asynchronous Javascript and XML

// The old Method (XMLHTTPRequest)
const request = new XMLHttpRequest();
request.onload = function () {
    const obj = JSON.parse(request.responseText);
    console.log(obj);
}
request.onerror = function(err) {
    console.log("ERROR! ", err);
}

request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
request.send();

//Fetch works with promises but the promise is resolved as soon as the first bits of the headers of the response are received
//So to access the body we need to call a json() method on the response which actually returns a promise that is resolved with
//the body of the response
fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res => {
    console.log("Response, before parsing: ", res);
    return res.json();
})
.then(data => {
    console.log("Parsed Data: ", data);
})
.catch(err => console.warn("ERROR! ", err));

//Axios is built on top of fetch and improves it
//unlike fetch the data is right in the resolved promise
axios.get('https://jsonplaceholder.typicode.com/todos/')
.then(res => {
    console.log("Data: " + res.data);
})
.catch(err => console.log("ERROR!", err));