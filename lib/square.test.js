const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<squ x="10" y="10" width="30" height="30" fill="blue" />');