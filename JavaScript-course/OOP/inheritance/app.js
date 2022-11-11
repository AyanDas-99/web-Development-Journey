class Animal{
    constructor(name,type,color){
        this.type = type
        this.name = name;
        this.color = color;
    }

    run(){
        console.log(this.name+" is running!");
    }
    shout(){
        console.log(this.name+" is shouting!");
    }
}

class Monkey extends Animal{
    constructor(name,color) {
        console.log('This is a monkey constructor')
    }
    eatBanana(){
        console.log(this.name+" is eating banana!");
    }
}

const chimpu = new Monkey('chimpu', 'brown');
console.log(chimpu)