
//FIXME broken dynamic message change
let CheckBox = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: true};

        //With React and ES6 - you need to bind the method to the class before referencing "this" in that method
        this.changeCheckboxState = this.changeCheckboxState.bind(this);
    }

    changeCheckboxState() {
        this.setState({checked: !this.state.checked});
    }

    render() {
        let message;
        if (this.state.checked)
            message = "Checked";
        else
            message = "Unchecked";

        return (
            <div>
                <input type="checkbox" defaultChecked={this.state.checked} onChange={this.changeCheckboxState}/>
                <h3>Checkbox is {message}</h3>
            </div>
        );
    }
};

ReactDOM.render(<CheckBox/>, document.getElementById("container"));