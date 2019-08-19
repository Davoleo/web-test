import instantiate = WebAssembly.instantiate;

document.write("<br>");

// Classes
class Animal {

    public favouriteFood: string;
    private _weight: number;

    static count: number = 0;

    constructor(private name: string, private owner: string){
        Animal.count++;
    }

    ownerInfo() {
        document.write(this.name + " is  owned by " + this.owner + "<br>");
    }

    static animalsCount(): number {
        return Animal.count;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }
}

var spot = new Animal("Spot", "Henry");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's Weight is " + spot.weight + "<br>");
document.write("# of Animals : " + Animal.count + "<br>");

class Cat extends Animal {

    constructor(name: string, owner: string) {
        super(name, owner);
        Cat.count++;
    }

}

var botolo = new Cat("Botolo", "Jack");
document.write("# of Animals : " + Animal.animalsCount() + "<br>");
document.write("Is a Cat an Animal : " + (botolo instanceof Animal) + "<br>");
document.write("Does Botolo have a name : " + ('name' in botolo) + "<br>");


