class Triangle extends Shapes{
    super(textColor, backgroundColor);
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.textColor}" />`
    }
}

module.exports = Triangle;