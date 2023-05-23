const Shapes = require('./shapes')
class Circle extends Shapes{
    constructor(textColor, backgroundColor){
        super(textColor, backgroundColor);
    }
    render(){
        return `<circle cx="25" cy="75" r="20" height="30" fill="${this.textColor}" />`
    }
}

module.exports = Circle;