import React from 'https://unpkg.com/react@16/umd/react.development';
import ReactDOM from 'https://unpkg.com/react-dom@16/umd/react-dom.development'

//Example component
var Sample = React.createClass({
    render: function () {
        return (<h3>Sample component</h3>);
    }
});

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('container'));
ReactDOM.render(<Sample/>, document.getElementById('container'));
