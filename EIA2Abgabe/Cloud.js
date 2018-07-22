var Aufgabe11;
(function (Aufgabe11) {
    class Cloud extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            if (this.x < -220) {
                this.x = Math.floor(Math.random() * (1000 - 980)) + 980;
                this.y = Math.floor(Math.random() * (850 - 40)) + 0;
            }
            this.x += -10;
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
            Aufgabe11.crc2.bezierCurveTo(this.x + 80, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
            Aufgabe11.crc2.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
            Aufgabe11.crc2.bezierCurveTo(this.x + 250, this.y + 70, this.x + 250, this.y + 40, this.x + 220, this.y + 20);
            Aufgabe11.crc2.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
            Aufgabe11.crc2.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
            Aufgabe11.crc2.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
            Aufgabe11.crc2.closePath();
            // add a radial gradient
            let grdCenterX = 260;
            let grdCenterY = 500;
            let grd = Aufgabe11.crc2.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 400);
            grd.addColorStop(0, "white"); // light grey
            grd.addColorStop(1, "#C0C0C0"); // dark grey
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "#FFE4B5";
            Aufgabe11.crc2.fillStyle = grd;
            Aufgabe11.crc2.fill();
            // set the line width and stroke color
            Aufgabe11.crc2.lineWidth = 5;
            Aufgabe11.crc2.strokeStyle = "#696969";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Cloud = Cloud;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Cloud.js.map