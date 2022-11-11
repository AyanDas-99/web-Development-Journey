class Person{
    constructor(name, age, canWalk){
        this.Walking = false;
        this.name = name;
        this.age = new Date(age);
        this.canWalk = canWalk;
    }
    walk(){
        if(this.canWalk){
            this.Walking = true;
            console.log('I\'m walking');
        }
        else{
            console.log(this.name+' cannot walk!');
        }

    }
    stopWalking(){
        console.log("I've stopped walking");
        this.Walking = false;
    }
    isWalking(){
        return this.Walking;
    }
}



const me = new Person('Ayan', '12 Jan 2003', true);
me.walk();
me.stopWalking();

console.log(me.isWalking())
console.log(me)