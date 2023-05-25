const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');


/* will format how the the shape and color will look */
let shape;
function renderShape(threeShapes, backgroundColor){
    console.log(threeShapes)
    if(threeShapes === 'triangle'){
        shape = new Triangle();
        shape.setColor(backgroundColor);
        return shape.render();
    }
    else if(threeShapes === 'circle'){
        shape = new Circle();
        shape.setColor(backgroundColor);
        shape.render();
    }
    else if(threeShapes === 'square'){
        shape = new Square();
        shape.setColor(backgroundColor);
        shape.render();
    }
}

/* the format to create the logo with user input*/
const generateLogo = ({text, textColor, shape, backgroundColor}) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${renderShape(shape, backgroundColor)}

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