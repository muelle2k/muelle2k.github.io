namespace Aufgabe11 {

    export class Background {

        public paint(): void {
            this.drawWater();
        }

        drawWater(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, "rgb(58,95,205)");
            gradient.addColorStop(1, "rgb(99,184,255)");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
    }
}


