
var Comment = class extends React.Component {
    edit() {
        alert("Editing Comment...");
    }
    remove(){
        alert("Comment Removed");
    }

    render() {
        return (
            <div className="commentContainer">
                <div className="comment">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        )
    }
};

ReactDOM.render(
    <div className="board">
        <Comment>Example Comment describing how my life is shit and all</Comment>
        <Comment>Hey you, stop looking at this comment pls k thx!</Comment>
    </div>,
    document.getElementById("container"));