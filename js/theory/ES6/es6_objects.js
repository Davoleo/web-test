/********************
 *  Coded By Davoleo
 ********************/

/**
 * Example tree object
 * height is a PROPERTY (color too) - a field of the object that can be accessed this way: object.fieldName
 * grow() is a METHOD - a method is a function of an object that can be called this way: object.methodName()
 * @type {{grow(): void, color: string, height: number}}
 */
let tree = {
    height: 10,
    color: "green",
    grow() {
        this.height +=2;
    }
};

//Computed Properties Objects
let prop = "name";
let id = 1234;
let mobile = "08923";

let user = {
    [prop]: 'Jack',
    [`user_${id}`]: `${mobile}`
};

//--------------------------------------------------------------------
//Object.assign(): to assign the properties of an object to another one
let person = {
    name: "Jack",
    age: "18",
    sex: "male"
};
let student = {
    name: "Bob",
    age: "20",
    xp: "222"
};

//Object duplication (NON-DEEP)
let newStudentPerson = Object.assign({}, student, person);
console.log(newStudentPerson);

//duplicates person without references to the original object
let newPerson = Object.assign({}, person);
//let newPerson = person;

//Array Destructuring
let sampleArray = [1, 2, 3, 4];
let [one, two, three, four] = sampleArray;
document.write(one + " " + two + " " + three + " " + four + " <br>");

//Array Destructuring
let arr = {h: 100, s: true};
let {h, s} = arr;
document.write(h + " " + s + "<br><br>");

//Rest Parameters
//Takes an array of parameters || multiple parameters
function addAll(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++)
        sum += nums[i];
    return sum;
}




