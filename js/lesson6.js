//Exersize 1
Object.defineProperty(String.prototype, "filter", {
    value: function filter(...words) {
        return this.split(" ").filter(x => words.indexOf(x) < 0).join(" ");
    },
    writable: true,
    configurable: true
});

console.log("Exersize 1");
console.log("This house is not nice!".filter("not"));
console.log("This house is not nice!".filter("not", "This"));
console.log("\n");

//Exersize 2
Object.defineProperty(Array.prototype, "bubbleSort", {
    value: function bubbleSort() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < (this.length - i - 1); j++) {
                if (this[j] > this[j + 1]) {
                    let temp = this[j];
                    this[j] = this[j + 1];
                    this[j + 1] = temp;
                }
            }
        }
        return this;
    },
    writable: true,
    configurable: true
});

console.log("Exersize 2");
console.log([6, 4, 0, 3, -2, 1].bubbleSort());
console.log([-1, -9, -10, -8, 6, -8, 18].bubbleSort());
console.log("\n");

//Exersize 3 & 4
function Person(firstName, lastName, age) {
    this.Name = firstName + " " + lastName;
    this.Age = age;
}

Person.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.Name + " and I am " + this.Age + " years old.");
}

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

function Teacher(firstName, lastName) {
    Person.call(this, firstName, lastName);
}
Teacher.prototype.teach = function (subject) {
    this.subject = subject;
    console.log(this.Name + " is now taching " + this.subject);
}

console.log("Exersize 3");
console.log("Teacher Object");
teacher = new Teacher("Sami", "Taha");
teacher.teach("WAP");
console.log("\n");

function Student(firstName, lastName, age, major) {
    Person.call(this, firstName, lastName, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.greeting = function () {
    console.log("Hey, my name is " + this.Name + " and I am studying " + this.major + ".");
}

function Professor(firstName, lastName, age, department) {
    Person.call(this, firstName, lastName, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greeting = function () {
    console.log("Good day, my name is " + this.Name + " and I am in the " + this.department + " department.");
}

console.log("Exersize 4");
console.log("Person Object");
person = new Person("Mohamed", "Abdelzaher", 31);
person.greeting();
person.salute();
console.log("\n");
console.log("Student Object");
student = new Student("Mohamed", "Abdelzaher", 31, "CS");
student.greeting();
student.salute();
console.log("\n");
console.log("Professor Object");
professor = new Professor("Sami", "Taha", 40, "Data Science");
professor.greeting();
professor.salute();