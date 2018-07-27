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
            if (this.x > 920) {
                this.x = 100;
            }
            if (_clickPositionY <= this.y) {
                this.y -= 26;
            }
            else {
                this.y += 26;
            }
        }
        /*  moving(targetY: number): void {
             this.dx = targetY;
         }
 
         stop(): void {
             this.dx = this.y;
         }
         */
        move() {
            this.x += +10;
            if (this.x > 920) {
                this.x = -200;
            }
        }
        /*checkPlane(): number {
            let position: number = this.x + this.y;
            return position;
        };*/
        crash() {
            for (let i = 0; i < Semesteraufgabe.bombsArray.length; i++) {
                let distanceX = this.x - Semesteraufgabe.bombsArray[i].x;
                let distanceY = this.y - Semesteraufgabe.bombsArray[i].y;
                if (distanceX < 50 && distanceX > -150) {
                    if (distanceY < 30 && distanceY > -30) {
                        this.gameOver();
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