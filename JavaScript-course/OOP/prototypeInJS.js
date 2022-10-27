function Person(name, dob){
    this.name = name;
    this.dob = new Date(dob);
}

Person.prototype.getAge = function() {
    const today = new Date();
    return today.getFullYear() - this.dob.getFullYear();
}

Person.prototype.introduce = function() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    console.log(`Hey I'm ${this.name}, I am born on ${this.dob.getDate()} ${months[this.dob.getMonth()]} ${this.dob.getFullYear()}`);
}

function Employee(name, dob, jobDesc, salary){
    Person.call(this, name, dob);
    this.jobDescription = jobDesc;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype)

// const someone = new Person('Name', '12 Jan 2003');
// console.log(someone)
const alex = new Employee('Alex martinez', '12 Jan 2003', 'Frontend Dev', 200000);
console.log(alex)
alex.introduce()
console.log(alex.getAge())