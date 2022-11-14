class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase()+name.substr(1, name.length);
    }
    walk(){
        console.log(`${this.name} is now walking`);
    }
}

const j = new Animal('cow')
j.walk()