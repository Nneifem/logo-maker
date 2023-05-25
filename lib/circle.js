const Shapes = require('./shapes')
class Circle extends Shapes{
    constructor(textColor, backgroundColor){
        super(textColor, backgroundColor);
    }
    render(){
        return `<circle cx="150" cy="100" r="90" height="30" fill="${this.backgroundColor}" />`
    }
}

module.exports = Circle;