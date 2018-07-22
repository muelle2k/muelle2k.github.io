namespace Aufgabe11 {

    export class Cloud extends MovingObjects {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            if (this.x < -220) {
                this.x = Math.floor(Math.random() * (1000 - 980)) + 980;
                this.y = Math.floor(Math.random() * (1500 - 100)) + 0;

            }            
                this.x += -10;
            
        }

        draw(): void {           //Methoden FÃ¤higkeiten

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
            crc2.bezierCurveTo(this.x + 80, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
            crc2.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
            crc2.bezierCurveTo(this.x + 250, this.y + 70, this.x + 250, this.y + 40, this.x + 220, this.y + 20);
            crc2.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
            crc2.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
            crc2.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
            crc2.closePath();

            // add a radial gradient
            let grdCenterX: number = 260;
            let grdCenterY: number = 500;
            let grd = crc2.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 400);
            grd.addColorStop(0, "white"); // light grey
            grd.addColorStop(1, "#C0C0C0"); // dark grey
            crc2.closePath();
            crc2.fillStyle = "#FFE4B5";
            crc2.fillStyle = grd;
            crc2.fill();

            // set the line width and stroke color
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#696969";
            crc2.stroke();
            crc2.fill()

        }

    }
}