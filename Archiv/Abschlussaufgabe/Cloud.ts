namespace Semesteraufgabe {

    export class Cloud extends Superclass {

      
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            if (this.x < -220) {
                this.x = Math.floor(Math.random() * (1000 - 980)) + 980;
                this.y = Math.floor(Math.random() * (850 - 40)) + 0;

            }
            this.x += -6;

        }

        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x - 20, this.y + 10, this.x - 20, this.y + 35, this.x + 30, this.y + 35);
            crc2.bezierCurveTo(this.x + 40, this.y + 10, this.x - 20, this.y + 35, this.x + 30, this.y + 35);
            crc2.bezierCurveTo(this.x + 40, this.y + 50, this.x + 75, this.y + 50, this.x + 85, this.y + 35);
            crc2.bezierCurveTo(this.x + 155, this.y + 35, this.x + 90, this.y + 10, this.x + 100, this.y + 10);
            crc2.bezierCurveTo(this.x + 130, this.y - 20, this.x + 100, this.y - 25, this.x + 60, this.y - 15);
            crc2.bezierCurveTo(this.x + 75, this.y - 37.5, this.x + 40, this.y - 30, this.x + 40, this.y - 15);
            crc2.bezierCurveTo(this.x + 15, this.y - 37.5, this.x - 10, this.y - 30, this.x, this.y);
            crc2.closePath();

            // add a radial gradient
            let grdCenterX: number = 260;
            let grdCenterY: number = 500;
            let grd = crc2.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 400);
            grd.addColorStop(0, "white");
            grd.addColorStop(1, "#C0C0C0");
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fillStyle = grd;
            crc2.fill();

            crc2.lineWidth = 5;
            crc2.strokeStyle = "#252525";
            crc2.stroke();
            crc2.fill()

        }
    }

} 