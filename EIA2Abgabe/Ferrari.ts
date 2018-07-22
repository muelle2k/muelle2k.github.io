namespace Aufgabe11 {
    export class Ferrari extends MovingObjects {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        moveDown(): void {
            if (this.y > 1500) {
                this.y += 10;
            }
        }

        moveUp(): void {
            if (this.y < crc2.canvas.height) {
                this.y += -10;
            }
        }

        move(): void {

            this.x += +30;

            if (this.x > 1000) {
                this.y = Math.floor(Math.random() * (1500 - 100)) + 0;
                this.x = -300;
            }

        }

        draw(): void {           //Methoden Fähigkeiten

            console.log(this.x, this.y);
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 25);
            crc2.lineTo(this.x - 10, this.y - 30);
            crc2.lineTo(this.x + 10, this.y - 27.5);
            crc2.lineTo(this.x + 50, this.y - 25);
            crc2.lineTo(this.x + 50, this.y - 12.5);
            crc2.lineTo(this.x + 115, this.y - 12.5);
            crc2.lineTo(this.x + 75, this.y - 25);
            crc2.lineTo(this.x + 100, this.y - 25);
            crc2.lineTo(this.x + 175, this.y - 12.5);
            crc2.lineTo(this.x + 150, this.y);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fill();

            /*  crc2.beginPath();
              crc2.fillStyle = "yellow";
              crc2.moveTo(this.x, this.y);
              crc2.arc(this.x + 45, this.y, 20, 0, Math.PI * 2, true);
              crc2.arc(this.x + 200, this.y, 20, 0, Math.PI * 2, true);
            */
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fill();
        }

    }
}