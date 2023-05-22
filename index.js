const inquirer = require('inquirer');


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
        name: 'color'
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
        name: 'shapeColor'
    }
]