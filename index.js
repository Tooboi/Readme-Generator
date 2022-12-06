// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// array of questions for user input

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

// write README file
function writeToFile(data) {
      console.log(data);
      fs.writeFile('README.md', generate(data), (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data)
    })
    .catch((error) => {
        console.log(error);
    })
}

// Function call to initialize app
init();