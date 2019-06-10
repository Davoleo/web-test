
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

let Anime = class extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.genre}</h2>
            </div>
        )
    }
};

//whenever you want to render multiple components you have to stick them together in a div tag
ReactDOM.render(
    <div>
        <Anime title="Hyouka" genre="Mistery" />
        <Anime title="Love, Chunibyo & Other Delusions" genre="Comedy" />
        <Anime title="That Time I Got Reincarnated as a Slime" genre="Adventure" />
    </div>, rootEl);