const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email,GitHubUser) {
    super(name, id, email)
    this.GitHubUser = GitHubUser;
  }
  getGithub() {
    return this.GitHubUser;
  }
  getRole() {
    return "Engineer";
  }
}


const engineer1 = new Engineer("ADAM",32,"EMAIL","CHAOSDON");
console.log(engineer1.getGithub());
module.exports = Engineer;