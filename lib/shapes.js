class Shapes {
    constructor(textColor, backgroundColor){
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }

    setColor(color){
        this.backgroundColor = color;
        this.textColor = color;
    }
}

module.exports = Shapes;