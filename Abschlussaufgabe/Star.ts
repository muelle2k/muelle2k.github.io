namespace Semesteraufgabe {

    export class Star extends Superclass {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

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

        move(): void {
            if (this.x < -220) {
                this.x = Math.floor(Math.random() * (1000 - 980)) + 980;
                this.y = Math.floor(Math.random() * (1500 - 100)) + 0;
            }
            this.x += -10;
        }

       

        checkPositionStar() {
            let positionX: number = this.x;
            let positionY: number = this.y;
            let FinalPosition: number = positionX + positionY;

            return FinalPosition;
        };
    }

}