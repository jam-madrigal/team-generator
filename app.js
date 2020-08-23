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

// This function will be called after the manager input is given, and will conditionally provide new prompts based on the user selection and then add more team members until the user chooses to quit. It mostly copies the function that runs initially to create a manager. 
// **I have heard using recursive functions like this is a bad practice. I definitely want to learn a better way to do it and update! However, this makes the most sense to me as a newbie so far.**

function nextMember() {
    inquirer.prompt(prompts.addNext).then((response) => {
    
    if (response.addNext === "Engineer") {
        inquirer.prompt(prompts.engineer)
        .then((response) => {
            let engineer = new Engineer (
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub,
            );

            memberObjectArray.push(engineer);
            nextMember();
        })
    }

    else if (response.addNext === "Intern") {
        inquirer.prompt(prompts.intern)
        .then((response) => {
            let intern = new Intern (
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool,
            );

            memberObjectArray.push(intern);
            nextMember();
        })
    }

    else {
        // Render function goes here, creating an output after the prompts are exited
        generateTeam();
        console.log("Team successfully generated.");
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
        nextMember();
    });

    // Function that generates the team from the memberObjectArray
    function generateTeam() {
        fs.writeFile(outputPath, render(memberObjectArray), function(err) {
            if (err)
                throw err;
        });
    }

