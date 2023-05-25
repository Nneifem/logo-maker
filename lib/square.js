const Shapes = require('./shapes')
class Square extends Shapes{
    constructor(textColor, backgroundColor){
        super(textColor, backgroundColor);
    }
    render(){
        return `<squ x="10" y="10" width="30" height="30" fill="${this.backgroundColor}" />`
    }
}

module.exports = Square;