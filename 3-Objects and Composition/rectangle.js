function rectangle(width, height, color) {
    let currRectangle = {
        width: Number(width),
        height: Number(height),
        color: color.replace(color[0], color[0].toUpperCase()),
        calcArea() {
            return width * height;
        }
    }

    return currRectangle;

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());