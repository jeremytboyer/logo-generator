const {Triangle, Circle, Square} = require('./shapes')

describe('Shapes', () => {
    it('Should return true if the correct Triangle is returned', () => {
        const shape = new Triangle("blue", "black", "jtb")

        expect(shape.render()).toBe( '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">' +
        '<polygon points="50 15, 100 100, 0 100" fill="blue"/>' +
        '<text x="50" y="80" font-size="40" text-anchor="middle" fill="black">jtb</text>' +
        "</svg>")
    })
    it('Should return true if the correct Circle is returned', () => {
        const shape = new Circle("blue", "black", "jtb")

        expect(shape.render()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">' +
        '<circle cx="100" cy="100" r="75" fill="blue" />' +
        '<text x="100" y="110" text-anchor="middle" font-size="60" fill="black">jtb</text>' +
        '</svg>')
    })
    it('Should return true if the correct Square is returned', () => {
        const shape = new Square("blue", "black", "jtb")

        expect(shape.render()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">' +
        '<rect x="50" y="50" width="200" height="200" fill="blue"/>' +
        '<text x="50%" y="70%" text-anchor="middle" font-size="60" fill="black">jtb</text>' +
        '</svg>')
    })
})