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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function nextMember() {
    inquirer.prompt(prompts.addNext).then((response) => {
    
    if (response === "Engineer") {
        inquirer.prompt(prompts.engineer)
        .then((response) => {
            let engineer = new Engineer (
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub,
            );

            memberObjectArray.push(engineer);
            // remove console log later
            console.log(memberObjectArray);
            nextMember();
        })
    }

    else if (response === "Intern") {
        inquirer.prompt(prompts.intern)
        .then((response) => {
            let intern = new Intern (
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool,
            );

            memberObjectArray.push(intern);
            // remove console log later
            console.log(memberObjectArray);
            nextMember();
        })
    }

    else {
        // Render function goes here, creating an output after the prompts are exited
        generateTeam();
        return "Team successfully generated.";
    };
})
};

// Prompt that takes in responses and adds a new manager class to an array that stores all the team members
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

    // Function that generates the team from the memberObjectArray
    function generateTeam() {
        fs.writeFile(outputPath, render(memberObjectArray), function(err) {
            if (err)
                throw err;
        });
    }

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
