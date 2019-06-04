
const rootEl = document.getElementById("⚛️");

const spanElement = React.createElement('span', {}, 'SPAN!');
// TYPE : Attributes : Children
//const element = React.createElement("h1", {id: "header"}, "Hello World ", spanElement);
const element = <h1 id="header">Hello World!!!</h1>;

//React component
let ExampleComponent = class extends React.Component{
    render() {
        return (
            <div>
                <h3>This is a simple react Component</h3>
                <p>Some sort of bacon component</p>
            </div>
        );
    }
};

//whenever you want to render multiple components you have to stick them together in a div tag
ReactDOM.render(
    <div>
        <ExampleComponent/>
        <ExampleComponent/>
        element
    </div>, rootEl);