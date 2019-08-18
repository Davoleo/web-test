
var Comment = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false};

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this)
    }

    edit() {
        this.setState({editing: true});
    }

    save(e) {
        e.preventDefault();
        let val = this.refs.newText.value;
        this.props.updateFunction(val, this.props.index);
        console.log("New Comment: " + val);
        this.setState(() => ({
            editing: false
        }));
    }

    remove(){
        this.props.removeFunction(this.props.index);
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

var Board = class extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            comments: []
        };

        this.removeComment = this.removeComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.eachComment = this.eachComment.bind(this);
        this.addExampleComments = this.addExampleComments.bind(this);
    }

    addComment(text) {
        var arr = this.state.comments;
        arr.push(text);
        this.setState({comments: arr})
    }

    addExampleComments() {
        var arr = this.state.comments;
        var exampleComments = [
            "Example Comment describing how my life is shit and all",
            "Everyone likes pizza",
            "Hey you, stop looking at this comment pls k thx!",
            "React is really complicated",
            "Ok, Enough comments now" ];

        for (let ecomment of exampleComments)
            arr.push(ecomment);

        this.setState({comments: arr})

    }

    removeComment(index) {
        console.log("removing comment: " + index);
        let arr = this.state.comments;
        arr.splice(index, 1);
        // ^^^ Removes 1 object at the index
        this.setState({comments: arr});
    }

    updateComment(newText, index) {
        console.log("Updating comment: " + index);
        let arr = this.state.comments;
        arr[index] = newText;
        this.setState({comments: arr});
    }

    eachComment(text, index) {
        return (
            <Comment key={index} index={index} updateFunction={this.updateComment} removeFunction={this.removeComment}>
                {text}
            </Comment>
        )
    }

    render() {
        return (
            <div>
                <button style={{marginRight: "1em"}} onClick={this.addComment.bind(null, "New Comment Text")} className="button-info create">Add New</button>
                <button onClick={this.addExampleComments} className="button-info create">Add a Couple of example Comments</button>
                <div className="board">{this.state.comments.map(this.eachComment)}</div>
            </div>
        );
    }

};

ReactDOM.render(<Board/> ,document.getElementById("container"));