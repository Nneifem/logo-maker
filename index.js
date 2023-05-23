const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');


/* questions for the user to answer to design their logo */
const questions = [
    {
        type: 'input',
        message: 'Enter a three character text',
        name: 'textColor'

    },
    {
        type: 'input',
        message: 'Enter a color or hexadecimal for the text',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Whay shape do you want?',
        name: 'shape',
        choices: [
            {
                name: 'triangle',
                value: 'triangle'
            },
            {
                name: 'circle',
                value: 'circle'
            },
            {
                name: 'square',
                value: 'square'
            }
        ]
    },
    {
        type: 'input',
        message: 'Enter a color or hexadecimal for the shape',
        name: 'backgroundColor'
    }
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('File has been successfully saved')
    );
}

function init(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        const createLogo = shapes(answers)
        writeToFile('logo.svg', createLogo)
    });
}

init();