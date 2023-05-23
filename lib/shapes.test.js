const shape = new Shapes();
shape.setColor("blue");
expect(shape.render()).toEqual('blue');

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polyon points="150, 18 244, 182 56, 182" fill="blue" />');

