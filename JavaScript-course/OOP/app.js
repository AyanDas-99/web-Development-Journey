function Person(firstName, lastName, dob, isMale) {
    this.firstName = firstName 
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.gender = isMale;
    this.isMarried = false;
}

// let day = prompt('Date at which born');
// let month = prompt('Month of birth');
// let year = prompt('Year of birth');
// const ayan = new Person('Ayan Das', `${month}-${day}-${year}`);
// console.log(ayan.birthday.getMonth())

Person.prototype.calculateAge = function () {
    var diff_ms = Date.now() - this.birthday.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

Person.prototype.getsMarried = function (newLastName) {
    if (!this.gender)
        this.lastName = newLastName;
    this.isMarried = true;
}

Person.prototype.getDetails = function () {
    let maritalStatus;
    this.isMarried ? maritalStatus='married' : maritalStatus='not married';
    let gender;
    this.gender ? gender = 'boy' : gender = 'girl';
    return `Hello ! My name is ${this.firstName} ${this.lastName} .I am ${this.calculateAge()} years old ${gender}. And I am ${maritalStatus}`
}
const ayan = new Person('Ayan', 'Das', '01/12/2003', true)
ayan.getsMarried('Biswas')
const girl = new Person('Dipika', 'Das', '15 Aug 1947')
girl.getsMarried('Das')
console.log(girl.getDetails())

console.log(ayan.hasOwnProperty('isMarried'))