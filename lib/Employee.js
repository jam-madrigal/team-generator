// TODO: Write code to define and export the Employee class
const Employee = {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getname() {
        return this.name;
    }

    getid() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;