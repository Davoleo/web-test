
const rootEl = document.getElementById("reactContainer");

const spanElement = React.createElement('span', {}, 'SPAN!');
// TYPE : Attributes : Children
//const element = React.createElement("h1", {id: "header"}, "Hello World ", spanElement);
const element = <h1 id="header">Hello World!!!</h1>;
console.log(element);
ReactDOM.render(element, rootEl);