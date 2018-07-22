/*
Abschlussaufgabe
Name: Patrick Müller-Klug
Matrikel: 257836
Datum: 29.07.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe11 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let objects: MovingObjects[] = [];

    let highscore: number = 0;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let width: number = canvas.width;
        let height: number = canvas.height;

        let hintergrund: Background = new Background();
        hintergrund.paint();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas al Bild gespeichert
        console.log(imgData);



        //canvas.addEventListener("keydown", movePlane);
        //canvas.addEventListener("touchmove", movePlaneTouch);
        
        for (let i: number = 0; i < 4; i++) {
            let stars: Star = new Star(Math.random() * (1000 - 700) + 0, Math.random() * 180, "yellow");
            stars.r = 10;
            objects.push(stars);
        }

        for (let i: number = 0; i < 1; i++) {
            let ferraris: Ferrari = new Ferrari((Math.random() * 100) * 1400, Math.random() * crc2.canvas.height, "#CD0000");
            objects.push(ferraris);
        }


        for (let i: number = 0; i < 15; i++) {
            let clouds: Cloud = new Cloud(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "rgb(220,220,220)");
            objects.push(clouds);

        }

        animate();


    }
    
    function updateHighscore(points: number): void {
        highscore += points;
        if (highscore >= 200) {
            alert("WOW!");
            highscore = 0;
        }
    }

    //Funktion die den Punktestand zeichnet

    function showHighscore(): void {
        crc2.font = "50px Arial";
        crc2.fillStyle = "white";
        crc2.fillText("Score: " + highscore, 675, 100);
    }


    function animate(): void {

        window.setTimeout(animate, 75);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();


    }

    function moveObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }

    }

    function drawObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }
        showHighscore();

    }
}