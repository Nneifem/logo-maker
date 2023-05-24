const inquirer = require('inquirer');
const fs = require('fs');

/* will format how the the shape and color will look */
function renderShape(shape){
    if(shape === 'triangle'){
        triangle = 'polygon points="150, 18 244, 182 56, 182"';
        return shape;
    }
    else if(shape === 'circle'){
        circle = 'circle cx="25" cy="75" r="20" height="30"';
        return shape;
    }
    else if(shape === 'square'){
        square = 'squ x="10" y="10" width="30" height="30"';
        return shape;
    }
}

const generateLogo = (text, textColor, shape, backgroundColor) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape} ${renderShape(shape)} fill="${backgroundColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

/* questions for the user to answer to design their logo */
const questions = [
    {
        type: 'input',
        message: 'Enter a three character text',
        name: 'text',
        maxLength: 3

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

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}

function init(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        const createLogo = generateLogo(answers)
        writeToFile('logo.svg', createLogo);
    })
}
init();