// const triangle = new Triangle();
// triangle.setColor("blue");
// expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const Triangle = require('./triangle');

describe('Triangle', () => {
    describe('color', () => {
        it('background color should be blue', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.backgroundColor).toEqual('blue');
        })
    })
    describe('render', () => {
        it('should return a string with the rendered shaped', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})
