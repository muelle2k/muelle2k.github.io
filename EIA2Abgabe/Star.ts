namespace Aufgabe11 {
    export class Star extends MovingObjects {
        r: number;

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


        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.closePath();

            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.lineTo(this.x - 20, this.y - 10);
            crc2.closePath();

            crc2.fillStyle = this.color;

            crc2.stroke();
            crc2.fill();
              
        }
    }


}