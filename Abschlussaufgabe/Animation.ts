namespace Semesteraufgabe {

    window.addEventListener("load", start);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let plane: Plane;
    export let bombsArray: any[] = [];

    let objects: Superclass[] = [];
    let positionBombs: number[] = [];



    let imgData: ImageData;
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    let name: string = inputs[0].value;

    function start(_event: Event): void {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("startbild").style.display = "initial";
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        button.addEventListener("click", init);

    }

    function init(): void {

        document.getElementById("startbild").style.display = "none";
        document.getElementById("canvas").style.display = "initial";
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        canvas.addEventListener("click", checkPositionPlane);
        canvas.addEventListener("touchstart", checkPositionPlane);
        
        environment();

        plane = new Plane((Math.random() * 100) * 1400, Math.random() * crc2.canvas.height, "#CD0000");
        objects.push(plane);

        for (let i: number = 0; i < 7; i++) {
            let stars: Star = new Star(Math.random() * (1000 - 700) + 0, Math.random() * 180, "white");
            objects.push(stars);
            bombsArray.push(stars);
        }

        for (let i: number = 0; i < 15; i++) {
            let clouds: Cloud = new Cloud(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "white");
            objects.push(clouds);
        }
        
        
        //Anonyme Funktion für Touch auf dem Handy
        document.querySelector("body").addEventListener("touchstart", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

            plane.moving(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchmove", function(e: TouchEvent) {

            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;

           plane.moving(canvasTouchPosX);
        });

        document.querySelector("body").addEventListener("touchend", function(e: TouchEvent) {
            plane.stop();
        });

        
        
        


        // Hintergrundbild als Variable gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // animate aufrufen
        animate();

    }

    function animate(): void {
        window.setTimeout(animate, 25);
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
        showName();
    }

    function checkPositionPlane(_event: MouseEvent): void {

        let clickPositionY: number = _event.clientY;
        let positionNemo: number = plane.checkPlane();

        plane.movePlane(clickPositionY);
        plane.collision();
    }

    function showName(): void {
        crc2.font = "30px Arial";
        crc2.fillStyle = "white";
        crc2.textAlign = "center";
        crc2.fillText("Player: " + inputs[0].value, 450, 50);

    }


}