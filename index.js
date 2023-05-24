const inquirer = require('inquirer');
const fs = require('fs');

/* will format how the the shape and color will look */
const generateLogo = (text, textColor, shape, backgroundColor) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape} cx="150" cy="100" r="80" fill="${backgroundColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

/* questions for the user to answer to design their logo */
const questions = [
    {
        type: 'input',
        message: 'Enter a three character text',
        name: 'text'

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
        message: 'Enter a color or hexadecimal for the background of the shape',
        name: 'backgroundColor'
    }
];

