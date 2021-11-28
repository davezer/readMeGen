const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
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
            name: 'collaborators',
            message: 'How should people contribute to this project? (Required)',
            validate: credits => {
                if (credits) {
                    return true;
                } else {
                    console.log('Please enter contribution instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'tests',
            message: 'How do you test this project? (Required)',
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
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Would you like to include your email?',
        },
       
];


function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) 
                throw err;
            console.log('File Created!')
        });
    
};


function init() {
    inquirer.prompt(questions)
        .then(function (userInput){
            console.log(userInput)
            writeToFile('./dist/README.md', generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();
