/*
Abschlussaufgabe
Name: Patrick Müller-Klug
Matrikel: 257836
Datum: 29.07.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let imgData;
    let objects = [];
    let highscore = 0;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        let width = canvas.width;
        let height = canvas.height;
        let hintergrund = new Aufgabe11.Background();
        hintergrund.paint();
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas al Bild gespeichert
        console.log(imgData);
        //canvas.addEventListener("keydown", movePlane);
        //canvas.addEventListener("touchmove", movePlaneTouch);
        for (let i = 0; i < 4; i++) {
            let stars = new Aufgabe11.Star(Math.random() * (1000 - 700) + 0, Math.random() * 180, "gold");
            stars.r = 10;
            objects.push(stars);
        }
        for (let i = 0; i < 1; i++) {
            let ferraris = new Aufgabe11.Ferrari((Math.random() * 100) * 1400, Math.random() * Aufgabe11.crc2.canvas.height, "#CD0000");
            objects.push(ferraris);
        }
        for (let i = 0; i < 15; i++) {
            let clouds = new Aufgabe11.Cloud(Math.random() * Aufgabe11.crc2.canvas.width, Math.random() * Aufgabe11.crc2.canvas.height, "rgb(220,220,220)");
            objects.push(clouds);
        }
        animate();
    }
    function updateHighscore(points) {
        highscore += points;
        if (highscore >= 200) {
            alert("WOW!");
            highscore = 0;
        }
    }
    //Funktion die den Punktestand zeichnet
    function showHighscore() {
        Aufgabe11.crc2.font = "60px Arial";
        Aufgabe11.crc2.fillStyle = "white";
        Aufgabe11.crc2.fillText("Score: " + highscore, 650, 100);
    }
    function animate() {
        window.setTimeout(animate, 75);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
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
        showHighscore();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map