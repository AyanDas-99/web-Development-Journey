class Complex{
    constructor(real, complex){
        this.realPart = real;
        this.complexPart = complex;
    }
    theValue(){
        return `${this.realPart} + ${this.complexPart}i`;
    }
    static addComplex(num1, num2){
        return `${num1.realPart+num2.realPart} + ${num1.complexPart+num2.complexPart}i`
    }
    get realPart(){
        return this._realPart;
    }
    get complexPart(){
        return this._complexPart;
    }
    set realPart(real){
        this._realPart = real;
    }
    set complexPart(imaginary){
        this._complexPart = imaginary;
    }
}

const x = new Complex(10, 32);
const y = new Complex(13, 23);

console.log(Complex.addComplex(x, y));
console.log(x.realPart)
x.realPart = 13;
console.log(Complex.addComplex(x, y));




// class Human {
//     constructor(name, gender, age){
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//     }
//     introduce(){
//         console.log(`Hi, I'm ${this.name}. I am ${this.age} years old.`);
//     }
// }

// class Student extends Human{
//     constructor(name, gender, age, org){
//         super(name, gender, age);
//         this.organization = org;
//     }
//     introduce(){
//         super.introduce();
//         console.log(`I am also a student of ${this.organization}`);
//     }
// }


// const me = new Student('Ayan Das', 'Male', 19, 'JNRM');
// me.introduce();