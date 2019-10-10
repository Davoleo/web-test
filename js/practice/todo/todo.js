/********************
 *  Coded By Davoleo
 ********************/

var todos = [];
var quit = false;

while (!quit) {
    var input = prompt("Select an option: ");

    switch (input)
    {
        case "list":
            console.log("--------------------------");
            todos.forEach((value, index) => {
                console.log(index + ": " + value);
            });
            console.log("--------------------------");
            break;

        case "new":
            var todo = prompt("Enter a new todo: ");
            todos.push(todo);
            console.log(todo + " was added to TODOs");
            break;

        case "delete":
            var index = parseInt(prompt("Index of the item you want to remove: "));
            var deletedItem = todos.splice(index, 1);
            console.log(deletedItem + " was removed from TODOs");
            break;

        case "quit":
            quit = true;
            console.log("You Quit the App");
            break;

        default:
    }
}