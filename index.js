// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to README Generator")
console.log("Answer all the questions to generate a high quality README file!")
// TODO: Create an array of questions for user input
const questions = [
    // Name of Project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: your_Input => {
            if(your_Input) {
                return true;
            } else {
                console.log('Enter a project title to continue!');
                return false;
            }
        }
    },
    // Description of Project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project.',
        validate: your_Description => {
            if(your_Description) {
                return true;
            } else {
                console.log('Enter a project description to continue!');
                return false;
            }
        }
    },
    // Installation instructions for Project
    {
        type: 'input',
        name: 'installation',
        message: 'How are you installing your project?',
        validate: your_Installation => {
            if(your_Installation) {
                return true;
            } else {
                console.log('Enter installation steps to continue!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How are you using this project?',
        validate: your_Usage => {
            if(your_Usage) {
                return true;
            } else {
                console.log('Enter usage information to continue!');
                return false;
            }
        }
    },
    // Available Licensing
    {
        type: 'checkbox',
        name: 'licence',
        message: 'Choose a licence for your project.',
        choices: ['Eclipse','GNU','Apache','MIT','None'],
        validate: your_Licence => {
            if(your_Licence) {
                return true;
            } else {
                console.log('Select an answer to continue!');
                return false;
            }
        }
    },
    // Contributors to the code
    {
        type: 'input',
        name: 'contribution',
        message: 'How are various users contributing to the project?',
        validate: your_Contribution => {
            if(your_Contribution) {
                return true;
            } else {
                console.log('Enter user contributions to continue!');
                return false;
            }
        }
    },
    // Test Instructions
    // NPM Test
    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this project?',
        validate: your_Test => {
            if(your_Test) {
                return true;
            } else {
                console.log('Enter how this project is tested to continue!');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username.',
        validate: github_Input => {
            if(github_Input) {
                return true;
            } else {
                console.log('Enter your Github Username to continue!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for further communications with other users.',
        validate: email_Input => {
            if(email_Input) {
                return true;
            } else {
                console.log('Enter your email address to continue!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated/${fileName}`, data, (err) => {
        if (err){
            return console.log(err);
        }
        console.log("Thank you! You can now view your generated README file!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
