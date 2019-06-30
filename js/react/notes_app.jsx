
var Comment = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false};

        this.edit = this.edit.bind(this);
        this.save = this.edit.bind(this);
    }

    edit() {
        this.setState({editing: true});
    }
    //FIXME It doesn't set the editing mode to false (fucking bitch)
    save() {
        this.setState({editing: false});
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

    renderForm() {
        return (
            <div className="commentContainer">
                <textarea defaultValue={this.props.children} name="" id="" cols="30" rows="10"/>
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