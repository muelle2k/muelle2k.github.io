var Aufgabe11;
(function (Aufgabe11) {
    class Ferrari extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        moveDown() {
            if (this.y > Aufgabe11.crc2.canvas.height) {
                this.y += 10;
            }
        }
        moveUp() {
            if (this.y < Aufgabe11.crc2.canvas.height) {
                this.y += -10;
            }
        }
        move() {
            this.x += +30;
            if (this.x > 920) {
                this.y = Math.floor(Math.random() * (850 - 40)) + 0;
                this.x = -200;
            }
        }
        draw() {
            console.log(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x - 10, this.y - 30);
            Aufgabe11.crc2.lineTo(this.x + 10, this.y - 27.5);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y - 12.5);
            Aufgabe11.crc2.lineTo(this.x + 115, this.y - 12.5);
            Aufgabe11.crc2.lineTo(this.x + 75, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 100, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 175, this.y - 12.5);
            Aufgabe11.crc2.lineTo(this.x + 150, this.y);
            Aufgabe11.crc2.lineTo(this.x, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.strokeStyle = "black";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            /*  crc2.beginPath();
              crc2.fillStyle = "yellow";
              crc2.moveTo(this.x, this.y);
              crc2.arc(this.x + 45, this.y, 20, 0, Math.PI * 2, true);
              crc2.arc(this.x + 200, this.y, 20, 0, Math.PI * 2, true);
            */
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.strokeStyle = "black";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Ferrari = Ferrari;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Ferrari.js.map