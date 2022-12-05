// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Input a description for your app'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would I install this app?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do I use this app?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can I contribute to this app?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is there a way to test your app?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like?',
        choices: ['MIT', 'Apache', 'GPL']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(questions)
    .then((data) => {
        const mark = MarkDown.generateMarkdown(data)
        fs.writeFile('README.md', mark, function(err) {
            if(err){
                console.log('Unable to save file, fix me and try again'. err);
            } else {
                console.log('Success!');
            }
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
