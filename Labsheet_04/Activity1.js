function exercise01() {
    const code = `
        class Rectangle {
            constructor(width, length) {
                this.width = width;
                this.length = length;
            }

            getWidth() {
            return this.width;
            }

            getArea() {
                return this.width * this.length;
            }
        };

        const rec1 = new Rectangle(2, 4);
        console.log("Width of rec1= ",rec1.getWidth());

        const rec2 = new Rectangle(3, 4);
        console.log("Area of rec1 = ", rec1.getArea());
        console.log("Area of rec2 = ", rec2.getArea());

    `;

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}

