const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project> (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please give a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe what your project does. (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please give your project a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please enter instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'How do you use your application?',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log('Please tell us how to use your app!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license from the list:',
            choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'Sil', 'Unlicense', 'Zlib'] 
        },
        {
            type: 'input', 
            name: 'tests',
            message: 'Tell us about the tests!',
            validate:  tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('Please tell us about the tests!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'additional-info',
            message: 'Would you like to provide any additional information about your application?'
        }
    ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
