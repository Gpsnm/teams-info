class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    returns("Employee");
  }
}

const adam = new Employee("adam", 32, "adam-willetts@hotmail.co.uk");

module.exports = Employee;

console.log(adam);
