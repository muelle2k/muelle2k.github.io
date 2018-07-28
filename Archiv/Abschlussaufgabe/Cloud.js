var Semesteraufgabe;
(function (Semesteraufgabe) {
    class Cloud extends Semesteraufgabe.Superclass {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            if (this.x < -220) {
                this.x = Math.floor(Math.random() * (1000 - 980)) + 980;
                this.y = Math.floor(Math.random() * (850 - 40)) + 0;
            }
            this.x += -6;
        }
        draw() {
            Semesteraufgabe.crc2.beginPath();
            Semesteraufgabe.crc2.fillStyle = this.color;
            Semesteraufgabe.crc2.moveTo(this.x, this.y);
            Semesteraufgabe.crc2.bezierCurveTo(this.x - 20, this.y + 10, this.x - 20, this.y + 35, this.x + 30, this.y + 35);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 40, this.y + 10, this.x - 20, this.y + 35, this.x + 30, this.y + 35);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 40, this.y + 50, this.x + 75, this.y + 50, this.x + 85, this.y + 35);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 155, this.y + 35, this.x + 90, this.y + 10, this.x + 100, this.y + 10);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 130, this.y - 20, this.x + 100, this.y - 25, this.x + 60, this.y - 15);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 75, this.y - 37.5, this.x + 40, this.y - 30, this.x + 40, this.y - 15);
            Semesteraufgabe.crc2.bezierCurveTo(this.x + 15, this.y - 37.5, this.x - 10, this.y - 30, this.x, this.y);
            Semesteraufgabe.crc2.closePath();
            // add a radial gradient
            let grdCenterX = 260;
            let grdCenterY = 500;
            let grd = Semesteraufgabe.crc2.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 400);
            grd.addColorStop(0, "white");
            grd.addColorStop(1, "#C0C0C0");
            Semesteraufgabe.crc2.closePath();
            Semesteraufgabe.crc2.fillStyle = "white";
            Semesteraufgabe.crc2.fillStyle = grd;
            Semesteraufgabe.crc2.fill();
            Semesteraufgabe.crc2.lineWidth = 5;
            Semesteraufgabe.crc2.strokeStyle = "#252525";
            Semesteraufgabe.crc2.stroke();
            Semesteraufgabe.crc2.fill();
        }
    }
    Semesteraufgabe.Cloud = Cloud;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Cloud.js.map