const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Importing the prompts I created
const prompts = require("./prompts");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

memberObjectArray = [];

const render = require("./lib/htmlRenderer");
const { ADDRGETNETWORKPARAMS } = require("dns");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function nextMember() {
    inquirer.prompt(prompts.addNext);
    if (prompts.addNext.choices === "Engineer") {
        inquirer.prompt(prompts.engineer)
        .then((response) => {
            let engineer = new Engineer (

            )
            memberObjectArray.push(engineer);
            // remove console log later
            console.log(memberObjectArray);
            nextMember()
        })
    }

    else if (prompts.addNext.choices === "Intern") {
        inquirer.prompt(prompts.intern)
        .then((response) => {
            let intern = new Intern (

            )
            memberObjectArray.push(intern);
            // remove console log later
            console.log(memberObjectArray);
            nextMember()
        })
    }

    else {
        // render function goes here, taking in the memberObjectArray
        return "Team successfully generated.";
    };
};

inquirer.prompt(prompts.manager)
    .then((response) => {
        let manager = new Manager (
            response.managerName,
            response.managerId,
            response.managerEmail,
            response.managerOfficeNumber,
        );

        memberObjectArray.push(manager);
        // remove console log later
        console.log(memberObjectArray);
        nextMember();
    });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
