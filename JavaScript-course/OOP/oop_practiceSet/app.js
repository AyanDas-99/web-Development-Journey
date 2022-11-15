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
}

const x = new Complex(10, 32);
const y = new Complex(13, 23);

console.log(Complex.addComplex(x, y));