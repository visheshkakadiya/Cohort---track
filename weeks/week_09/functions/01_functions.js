const person1 = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person2 = {
    name: "Bob"
};

// Use call to borrow the greet method
//person1.greet.call(person2)         // Hello, my name is Bob


const newperson = {
    name: "Alice",
    greet: function (greeting, punctuation) {
        console.log(`${greeting}, my name is ${this.name}${punctuation}`);
    }
};

const apllyperson2 = { name: "Bob" };

// Using apply() to borrow the method
// person.greet.apply(apllyperson2, ["Hi", "!"]);   // Output: Hi, my name is Bob!


const bindperson = {
    name: "Alice",
    greet: function (greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
};

const bindperson2 = { name: "Bob" };

// Using bind() to create a new function
const boundGreet = bindperson.greet.bind(bindperson2, "Hello");
// boundGreet();                                  // Output: Hello, my name is Bob




const person = {
    name: "Charlie",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const greetFn = person.greet;
// greetFn();  // Hello, undefined 



const personad = {
    name: "John",
    sayHello: function() {
        return () => {
            console.log(this.name);
        };
    }
};

const hello = personad.sayHello();
// hello();  // John



const user = {
    name: "Bob",
    logName() {
        console.log(this.name);
    }
};

// setTimeout(user.logName, 1000);  // undefined




const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const newFn1 = obj.greet();  // Calls greet() immediately, prints "Hello, Alice"
const newFn2 = obj.greet;    // Just stores the function reference, does NOT call it

// newFn2(); // This will likely print "Hello, undefined" because `this` is lost

