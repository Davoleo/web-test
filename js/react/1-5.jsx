// After (15.5)
const React = require('react');
const createReactClass = require('create-react-class');

//Example component
var Sample = createReactClass({
    render: function () {
        return (<h3>Sample component</h3>);
    }
});

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('reactContainer'));
ReactDOM.render(<Sample/>, document.getElementById('reactContainer'));
