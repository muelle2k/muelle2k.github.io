var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Star extends Semesteraufgabe.Superclass {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.moveTo(this.x, this.y - 20);
            Semesteraufgabe.crc2.lineTo(this.x + 20, this.y + 10);
            Semesteraufgabe.crc2.lineTo(this.x - 20, this.y + 10);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.moveTo(this.x, this.y + 20);
            Semesteraufgabe.crc2.lineTo(this.x + 20, this.y - 10);
            Semesteraufgabe.crc2.lineTo(this.x - 20, this.y - 10);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fillStyle = this.color;
            Semesteraufgabe.crc2.stroke();
            Semesteraufgabe.crc2.fill();
        }
        move() {
            if (this.x < -220) {
                this.x = Math.floor(Math.random() * (1000 - 980)) + 980;
                this.y = Math.floor(Math.random() * (1500 - 100)) + 0;
            }
            this.x += -10;
        }
        checkPositionStar() {
            let positionX = this.x;
            let positionY = this.y;
            let FinalPosition = positionX + positionY;
            return FinalPosition;
        }
        ;
    }
    Semesteraufgabe.Star = Star;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Star.js.map