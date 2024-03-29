class Coffee {
    constructor(name) {
        this._name = name;

        Coffee.salesVolume++;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    };

    display () {
        console.log(this._name);
    }

    static getSalesVolume() {
        return Coffee.salesVolume;
    }

}

Coffee.salesVolume = 0;

let coffee = new Coffee("Americano");

console.log(coffee.name);

console.log(Coffee.getSalesVolume());

coffee = new Coffee("Espresso");

console.log(coffee.name);

console.log(Coffee.getSalesVolume());