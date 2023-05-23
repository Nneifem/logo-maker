const Shapes = require('./shapes');

describe('Shape', () => {
    describe('color', () => {
        it('background color should be blue', () => {
            const shape = new Shapes();
            shape.setColor("blue");
            expect(shape.backgroundColor).toEqual('blue');
        })
    })
})

