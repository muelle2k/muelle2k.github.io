var Aufgabe11;
(function (Aufgabe11) {
    class Background {
        paint() {
            this.drawWater();
        }
        drawWater() {
            let gradient = Aufgabe11.crc2.createLinearGradient(0, 0, 0, 500);
            gradient.addColorStop(0, "rgb(58,95,205)");
            gradient.addColorStop(1, "rgb(99,184,255)");
            Aufgabe11.crc2.fillStyle = gradient;
            Aufgabe11.crc2.fillRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        }
    }
    Aufgabe11.Background = Background;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Background.js.map