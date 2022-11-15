class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}

const me = new Person('Ayan')
console.log(me instanceof Person)