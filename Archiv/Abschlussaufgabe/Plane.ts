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
            
            if (_clickPositionY <= this.y) { // falls click über
                this.y -= 26;
            } else { //else click unter
                this.y += 26;
            }
        }

        move(): void {
            this.x += +10;
            if (this.x > 920) {
                this.x = -150;
            }
        }


        crash() {
            for (let i = 0; i < starsArray.length; i++) {
                let distanceX = this.x - starsArray[i].x;
                let distanceY = this.y - starsArray[i].y;
                
                if (distanceX < 50 && distanceX > -150) {
                    
                    if (distanceY < 30 && distanceY > -30) {
                        
                        this.gameOver();
                                              
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