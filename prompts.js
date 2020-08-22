const prompts = {
    // Prompts for the manager
    manager: [
    {
      type: "input",
      message: "What is the manager's name?",
      name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the manager's ID number?",
        name: "managerId",
    },
    {
        type: "input",
        message: "What is the managers office number?",
        name: "managerOfficeNumber"
    }],

    // Prompts to select what to add next, or to quit the application and render the team
    addNext: {
        type: "list",
        message: "Select a new type of team member to add, or exit and render the team.",
        name: "addNext",
        choices: [
            "Engineer",
            "Intern",
            "Quit",
        ]
    },
    // Prompts for the engineer
    engineer: [
        {
          type: "input",
          message: "What is the engineers's name?",
          name: "engineerName"
        },
        {
            type: "input",
            message: "What is the engineers's email address?",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "What is the engineers's ID number?",
            name: "engineerId",
        },
        {
            type: "input",
            message: "What is the engineer's github username?",
            name: "engineerGithub"
        }],

    // Prompts for the intern
    intern: [
        {
          type: "input",
          message: "What is the intern's name?",
          name: "internName"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "internEmail",
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "internId",
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "internSchool"
        }],

};

module.exports = prompts;