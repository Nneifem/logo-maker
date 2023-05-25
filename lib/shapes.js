class Shapes {
    constructor(textColor){
        this.textColor = textColor;
        this.backgroundColor = '';
    }

    setColor(color, txtColor){
        this.backgroundColor = color;
        this.textColor = txtColor;
    }
}

module.exports = Shapes;