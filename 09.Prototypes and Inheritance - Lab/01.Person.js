//this the standart JS way to create object (the old-school way), on which is based the way to create objects with classes:

//function constructor: 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
   
    Object.defineProperty(this, 'fullName', {
        get: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(value) {
            //Validation:
            let regPattern = /(?<firstName>\w+) (?<lastName>\w+)/;
           let matchResult = value.match(regPattern);
        //    console.log(matchResult.groups.firstName);
        //    console.log(matchResult.groups.lastName);
            if(matchResult) {
            this.firstName = matchResult.groups.firstName;
            this.lastName = matchResult.groups.lastName;            
            }
        }
    });
}

// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla
let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
