const Shapes = require('./shapes')
class Square extends Shapes{
    constructor(textColor, backgroundColor){
        super(textColor, backgroundColor);
    }
    render(){
        return `<rect x="102" y="50" width="100" height="110" fill="${this.backgroundColor}" />`
    }
}

module.exports = Square;