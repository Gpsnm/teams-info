const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
// empty array to hold team data.
let team = [];

function start() {
  // function to generate manager
  function getManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the managers name? ",
          validate: (answer) => {
            if (answer != "") {
              return true;
            }
            return "Please enter at least one character";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the managers employee id number?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the managers email address ?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the managers office number? ",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        team.push(manager);
        // call the next function that will ask what type of employee will be created next
        createTeam();
      });
  }
}

function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "teamChoice",
      message: "what type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add anything else"],
    },
  ]);
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineers name? ",
        validate: (answer) => {
          if (answer != "") {
            return true;
          }
          return "Please enter at least one character";
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineers employee id number?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineers email address ?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the engineers Github username? ",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineer,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      team.push(engineer);
      createTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "InternName",
        message: "What is the Interns name? ",
        validate: (answer) => {
          if (answer != "") {
            return true;
          }
          return "Please enter at least one character";
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is the engineers employee id number?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the engineers email address ?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the inturn attend?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.intern,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      team.push(intern);
      createTeam();
    });
}
