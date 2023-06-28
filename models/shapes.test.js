const {Triangle} = require('./shapes')

describe('Shapes', () => {
    it('Should return true if the correct shape is passed', () => {
        const shape = new Triangle("blue", "black", "jtb")

        expect(shape.render()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">' +
        '<polygon points="50 15, 100 100, 0 100" fill="blue"/>' +
        '<text x="50" y="80" text-anchor="middle" fill="black">jtb</text>' +
        '</svg>')
    })
})