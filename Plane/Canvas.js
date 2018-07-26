var Semesteraufgabe;
(function (Semesteraufgabe) {
    window.addEventListener("load", start);
    Semesteraufgabe.bombsArray = [];
    let objects = [];
    let positionBombs = [];
    let imgData;
    function start(_event) {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("startbild").style.display = "initial";
        let button = document.getElementById("startButton");
        button.addEventListener("click", init);
    }
    function init() {
        document.getElementById("startbild").style.display = "none";
        document.getElementById("canvas").style.display = "initial";
        Semesteraufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Semesteraufgabe.crc2 = Semesteraufgabe.canvas.getContext("2d");
        Semesteraufgabe.canvas.addEventListener("click", checkPositionPlane);
        Semesteraufgabe.environment();
        Semesteraufgabe.plane = new Semesteraufgabe.Plane((Math.random() * 100) * 1400, Math.random() * Semesteraufgabe.crc2.canvas.height, "#CD0000");
        objects.push(Semesteraufgabe.plane);
        for (let i = 0; i < 7; i++) {
            let bombs = new Semesteraufgabe.Bombe(Math.random() * (1000 - 700) + 0, Math.random() * 180, "yellow");
            objects.push(bombs);
            Semesteraufgabe.bombsArray.push(bombs);
        }
        for (let i = 0; i < 15; i++) {
            let clouds = new Semesteraufgabe.Cloud(Math.random() * Semesteraufgabe.crc2.canvas.width, Math.random() * Semesteraufgabe.crc2.canvas.height, "white");
            objects.push(clouds);
        }
        // Hintergrundbild als Variable gespeichert
        imgData = Semesteraufgabe.crc2.getImageData(0, 0, Semesteraufgabe.canvas.width, Semesteraufgabe.canvas.height);
        // animate aufrufen
        animate();
    }
    function animate() {
        window.setTimeout(animate, 25);
        Semesteraufgabe.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }
    function checkPositionPlane(_event) {
        let clickPositionY = _event.clientY;
        let positionNemo = Semesteraufgabe.plane.checkPlane();
        Semesteraufgabe.plane.movePlane(clickPositionY);
        Semesteraufgabe.plane.collision();
    }
})(Semesteraufgabe || (Semesteraufgabe = {}));
//# sourceMappingURL=Canvas.js.map