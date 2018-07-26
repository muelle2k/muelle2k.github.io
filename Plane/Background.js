var Semesteraufgabe;
(function (Semesteraufgabe) {
    function environment() {
        let gradient = Semesteraufgabe.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "#353535");
        Semesteraufgabe.crc2.fillStyle = gradient;
        Semesteraufgabe.crc2.fillRect(0, 0, Semesteraufgabe.crc2.canvas.width, Semesteraufgabe.crc2.canvas.height);
    }
    Semesteraufgabe.environment = environment;
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Background.js.map