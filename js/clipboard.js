
//Removes jQuery alias: $
//$.noConflict();

//Constant values
const stuff = 3,
    ba1 = 10,
    _asdf = 93;
//Variable_values
var bambino_asiatico = 0;

//Shows a message box containing this message
//alert("Hello World!");
//Outputs a console message
console.log(bambino_asiatico);

var n1 = Number.MAX_SAFE_INTEGER;
var n2 = n1 + 1;
var n3 = n2 + 2;

console.log(n1);
console.log(n2);
console.log(n3);

console.log(7==9);
console.log(7==7);
console.log("cane" == "cane"); //== Weak equals
console.log(n2 === n2 + 1); //=== Strict equals
console.log("Safe: " + Number.isSafeInteger(n2));

if(!Number.isSafeInteger(n2))
{
    //alert("WARNING: this is not a safe number")
}

var x = 0.1 + 0.2;
console.log(x);
console.log(Math.abs(x-3) < 0.00001);
console.log(0.1+0.2===0.3);
console.log(Number.MIN_VALUE);

const pi_greco = 3.14;

var y;
console.log(y);
//NaN Not a Number
var z = 10 / "cucu!";
console.log(z);
z = 0/0;
console.log(z);
z = Math.sqrt(-8);
console.log(z);

if (NaN != NaN)
    console.log("Mi Arrendo!");

var string1 = "ciao";
console.log(string1 + " - " + string1.length);

var string1 = "֎";
console.log(string1 + " - " + string1.length);

var string1 = "ԮՓԩ";
console.log(string1 + " - " + string1.length);

//Valori che danno condizione falsa nell'if
if (n) {alert("n non viene stampato");}
if (0/0) {alert("0/0 non viene stampato");} //NaN
if ("") {alert("\"\" non viene stampato")}

//Espressioni che non c'entrano con quelle qua sopra danno tutte vero nelle condizioni di un if
if (4) {alert("il 4 viene stampato");}
if ("blu") {alert("\"blu\" viene stampato")}

//Valori speciali
//Undefined: Valore non assegnato
//Null: forzato da noi, valore nullo
//NaN: Not a Number, non si tratta di un valore numeric
