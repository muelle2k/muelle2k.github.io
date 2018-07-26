var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Plane extends Semesteraufgabe.Superclass {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        draw() {
            console.log(this.x, this.y);
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = this.color;
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.lineTo(this.x, this.y - 25);
            Semesteraufgabe.crc2.lineTo(this.x - 10, this.y - 30);
            Semesteraufgabe.crc2.lineTo(this.x + 10, this.y - 27.5);
            Semesteraufgabe.crc2.lineTo(this.x + 50, this.y - 25);
            Semesteraufgabe.crc2.lineTo(this.x + 50, this.y - 12.5);
            Semesteraufgabe.crc2.lineTo(this.x + 115, this.y - 12.5);
            Semesteraufgabe.crc2.lineTo(this.x + 75, this.y - 25);
            Semesteraufgabe.crc2.lineTo(this.x + 100, this.y - 25);
            Semesteraufgabe.crc2.lineTo(this.x + 175, this.y - 12.5);
            Semesteraufgabe.crc2.lineTo(this.x + 150, this.y);
            Semesteraufgabe.crc2.lineTo(this.x, this.y);
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.strokeStyle = "black";
            Semesteraufgabe.crc2.stroke();
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.strokeStyle = "black";
            Semesteraufgabe.crc2.stroke();
            Semesteraufgabe.crc2.fill();
        }
        // move nach Mausklick
        movePlane(_clickPositionY) {
            this.x += +20;
            if (this.x > 920) {
                this.x = -200;
            }
            if (_clickPositionY <= this.y) {
                this.y -= 20;
            }
            else {
                this.y += 20;
            }
        }
        checkPlane() {
            let position = this.x + this.y;
            return position;
        }
        ;
        collision() {
            for (let i = 0; i < Semesteraufgabe.bombsArray.length; i++) {
                let distanceX = this.x - Semesteraufgabe.bombsArray[i].x;
                let distanceY = this.y - Semesteraufgabe.bombsArray[i].y;
                console.log("x: " + distanceX);
                console.log("y: " + distanceY);
                if (distanceX < 80 && distanceX > -40) {
                    if (distanceY < 80 && distanceY > -40) {
                        this.gameOver();
                        console.log("treffer");
                    }
                }
            }
        }
        gameOver() {
            window.alert("Flugzeug wurde getroffen!");
            if (window.alert) {
                location.reload();
            }
        }
    }
    Semesteraufgabe.Plane = Plane;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Plane.js.map