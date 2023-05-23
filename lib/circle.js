class Circle extends Shapes{
    super(textColor, backgroundColor);
    render(){
        return `<circle cx="25" cy="75" r="20" height="30" fill="${this.textColor}" />`
    }
}

module.exports = Circle;