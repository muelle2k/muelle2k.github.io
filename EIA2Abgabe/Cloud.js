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
            Aufgabe11.crc2.bezierCurveTo(this.x - 20, this.y + 10, this.x - 20, this.y + 35, this.x + 30, this.y + 35);
            Aufgabe11.crc2.bezierCurveTo(this.x + 40, this.y + 10, this.x - 20, this.y + 35, this.x + 30, this.y + 35);
            Aufgabe11.crc2.bezierCurveTo(this.x + 40, this.y + 50, this.x + 75, this.y + 50, this.x + 85, this.y + 35);
            Aufgabe11.crc2.bezierCurveTo(this.x + 155, this.y + 35, this.x + 90, this.y + 10, this.x + 100, this.y + 10);
            Aufgabe11.crc2.bezierCurveTo(this.x + 130, this.y - 20, this.x + 100, this.y - 25, this.x + 60, this.y - 15);
            Aufgabe11.crc2.bezierCurveTo(this.x + 75, this.y - 37.5, this.x + 40, this.y - 30, this.x + 40, this.y - 15);
            Aufgabe11.crc2.bezierCurveTo(this.x + 15, this.y - 37.5, this.x - 10, this.y - 30, this.x, this.y);
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