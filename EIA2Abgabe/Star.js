var Aufgabe11;
(function (Aufgabe11) {
    class Star extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            if (this.x < -220) {
                this.x = Math.floor(Math.random() * (1000 - 980)) + 980;
                this.y = Math.floor(Math.random() * (1500 - 100)) + 0;
            }
            this.x += -10;
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 20, this.y + 10);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.moveTo(this.x, this.y + 20);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x - 20, this.y - 10);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Star = Star;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Star.js.map