// Calling the Employee class from which the manager class will inherit properties
// All other classes will be using these same techniques, imagine these comments are also there for reference
const Employee = require(`./Employee.js`);

// Creating the new class manager, that inherits parameters from the Employee class, using "extends"
class Manager extends Employee {
    // Adding a new parameter for manager "officeNumber" and using the inherited parameters
    constructor(name, id, email, officeNumber) {
        // Initializiing the parameters and inheriting them from Employee as needed with super()
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Function that returns the name of the class/object
    getRole() {
        return `Manager`;
    }
};

// Making it so when other files import/read from this file, they acquire the functionality of the Manager object/class
module.exports = Manager; 