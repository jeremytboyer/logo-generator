class Triangle {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor
    this.text = text
  }
  render() {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">' +
      '<polygon points="50 15, 100 100, 0 100" fill="' +
      this.color +
      '"/>' +
      '<text x="50" y="80" font-size="40" text-anchor="middle" fill="' + this.textColor + '">' + this.text + '</text>' +
      "</svg>"
    );
  }
}


class Circle {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor
    this.text = text;
  }
  render() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">' +
      '<circle cx="100" cy="100" r="75" fill="' + this.color + '" />' +
      '<text x="100" y="110" text-anchor="middle" font-size="60" fill="' + this.textColor +'">' + this.text + '</text>' +
      '</svg>';
  }
}

class Square {
    constructor(color, textColor, text) {
        this.color = color;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">' +
        '<rect x="50" y="50" width="200" height="200" fill="' + this.color + '"/>' +
        '<text x="50%" y="70%" text-anchor="middle" font-size="60" fill="' + this.textColor +'">' + this.text + '</text>' +
        '</svg>';
    }
}

module.exports = { Triangle, Circle, Square };
