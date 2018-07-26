namespace Semesteraufgabe { //neuer nc

    export class Plane extends Superclass {
        direction: number;


        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        draw(): void {

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

            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fill();

        }

        // move nach Mausklick
        movePlane(_clickPositionY: number): void {

            this.x += +20;

            if (this.x > 920) {
                this.x = -200;
            }

            if (_clickPositionY <= this.y) { // falls click über
                this.y -= 20;
            } else { //else click unter
                this.y += 20;
            }
        }

        checkPlane(): number {
            let position: number = this.x + this.y;

            return position;
        };

        collision() {
            for (let i = 0; i < bombsArray.length; i++) {
                let distanceX = this.x - bombsArray[i].x;
                let distanceY = this.y - bombsArray[i].y;
                console.log("x: " + distanceX);
                console.log("y: " + distanceY);
                if (distanceX < 80 && distanceX > - 40) {

                    if (distanceY < 80 && distanceY > -40) {
                        this.gameOver();
                        console.log("treffer");
                    }
                }
            }
        }

        gameOver(): void {
            window.alert("Flugzeug wurde getroffen!");
            if (window.alert) {
                location.reload();
            }
        }
    }
}