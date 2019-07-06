
var Comment = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false};

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        this.setState({editing: true});
    }
    //FIXME It doesn't set the editing mode to false (fucking bitch)
    save(e) {
        e.preventDefault();
        let val = this.refs.newText.value;
        console.log("New Comment: " + val);
        this.setState(state => ({
            editing: false
        }));
    }

    remove(){
        alert("Comment Removed");
    }
    renderNormal() {
        return (
            <div className="commentContainer">
                <div className="comment">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        )
    }

    /*we use ref instead of id because it can be assigned to multiple components, while ids need to be unique*/
    renderForm() {
        return (
            <div className="commentContainer">
                <textarea ref="newText" defaultValue={this.props.children} cols="30" rows="10"/>
                <button onClick={this.save} className="button-success">Save</button>
            </div>
        )
    }

    render() {
        if (this.state.editing)
            return this.renderForm();
        else
            return this.renderNormal();
    }
};

ReactDOM.render(
    <div className="board">
        <Comment>Example Comment describing how my life is shit and all</Comment>
        <Comment>Hey you, stop looking at this comment pls k thx!</Comment>
    </div>,
    document.getElementById("container"));