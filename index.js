// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['MIT', 'APACHE', 'GPL', 'BSD']
    },
    {
        type: 'input',
        name: 'describe',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe usage of project.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to project?'
    },
    {
        type: 'list',
        name: 'test',
        message: 'Did you test?',
        choices: ['Yes/Passed', 'Yes/Failed', 'No']
    }

];
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        }
        else {
            console.log("success")
        }
    })
}

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

init()
// TODO: Create a function to write README file using the user input from our choices above
//function writeToFile(fileName, data) {
//return fs.writeFileSync(path.join(process.cwd(), fileName), data)
//}

// TODO: Create a function to initialize app
/* function init() {
    inquirer.prompt(questions)
    .then((response) => {
            console.log('Your readME is being created....');
            writeToFile('README.md'. generateMarkdown( { ...response } ))
        }
    )
}

// Function call to initialize app
init();
 */