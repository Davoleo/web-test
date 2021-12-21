//Object Prototypes
//Template object for a certain object type for example all the methods under Array.prototype are then accessiblr in specific arrays
//You can also make changes to prototypes and add methods or properties (not really good practice but you can do it), e.g:
String.prototype.addHashtags = function() {
    return `### ${this} ###`
};
//prototype (actual prototype object) and __proto__ in specific objects is a reference and a property that references the prototype

//Factory Functions 
//They Build objects with certain properties and methods that manipulate the properties
//Alternative approach for simple objects 
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }

    color.hex = function() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    return color;
}

//Factory function duplicate functions for each object that is made, this issue is fixed by using prototypes and constructor functions

//Legacy way of working with common objects and object templates (it basically makes some part of the )
//new keyword & 
//constructor functions
function LegacyColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
//calling this function with 'new' creates a blank JS object
//sets the constructor of __proto__ to this function
//passes the newly created object to the function as 'this'
//returns 'this' if the function doesn't return another thing
const color1 = new LegacyColor(255, 40, 100);

//To define a method that in the shared prototype object we need to run:
//This way methods are not duplicated for each object
LegacyColor.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}
LegacyColor.prototype.hex = function() {
    return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
}
LegacyColor.prototype.rgba = function(alpha = 1.0) {
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

//Defining Classes, new syntax (ES 2015)
class Color {
    constructor(r, g, b, name = 'color') {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        //populate h s l format
        this.calcHSL();
    }

    //Getter
    get name() {
        return this.name;
    } 

    //Method creation
    rgb() {
        //This refers to the instance of the object
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    rgba(alpha = 1.0) {
        const {r, g, b} = this;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    hex() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    hsl() {
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }

    opposite() {
        const {h, s, l} = this;
        const newHue = (h + 180) % 360
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }

    fullSaturation() {
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`
    }

    calcHSL() {
        let {r, g, b} = this;

        //rgb fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        //Find greatest and smallest channel values
        let channelMin = Math.min(r, g, b);
        let channelMax = Math.max(r, g, b);
        let delta = channelMax - channelMin;
        let h = 0, s = 0, l = 0;
        if (delta == 0) 
            h = 0;
        else if (channelMax == r)
            h = ((g - b) / delta) % 6;
        else if (channelMax == g)
            h = ((b - r) / delta) + 2;
        else
            h = ((r - g) / delta) + 4;
        
        h = Math.round(h * 60);
        
        if (h < 0) 
            h += 360;

        //Lightness
        l = (channelMax + channelMin) / 2;

        //Saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        //Make S and L percentages
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const color2 = new Color(200, 64, 78, 'red-ish');

