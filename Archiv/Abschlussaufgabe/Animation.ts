namespace Semesteraufgabe {

    window.addEventListener("load", start);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let plane: Plane;
    export let starsArray: any[] = [];

    let objects: Superclass[] = [];
    let positionStars: number[] = [];

    export let planeAudio = new Audio("beep.wav");
    let sound = new Audio("audio.mp3")
    let imgData: ImageData;
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    let name: string = inputs[0].value;

    function start(_event: Event): void {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("startbild").style.display = "initial";
        
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        
        button.addEventListener("click", init);
        // Hintergrundmusik 

        sound.loop = true;
        sound.play();
        sound.volume = 0.1;
        document.body.appendChild(sound);

    }

    function init(): void {

        document.getElementById("startbild").style.display = "none";
        document.getElementById("canvas").style.display = "initial";
        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        canvas.addEventListener("click", checkPositionClick);
        canvas.addEventListener("touch", checkPositionTouch);

        environment();

        plane = new Plane((Math.random() * 100) * 1400, Math.random() * crc2.canvas.height, "#CD0000");
        objects.push(plane);

        for (let i: number = 0; i < 7; i++) {
            let stars: Star = new Star(Math.random() * (1000) + 0, Math.random() * 180, "white");
            objects.push(stars);
            starsArray.push(stars);
        }

        for (let i: number = 0; i < 20; i++) {
            let clouds: Cloud = new Cloud(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "white");
            objects.push(clouds);
        }


        // Hintergrundmusik 
        sound.loop = true;
        sound.play();
        sound.volume = 0.3;
        document.body.appendChild(sound);

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
       
        plane.crash();
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

    function checkPositionClick(_event: MouseEvent): void {

        let clickY: number = _event.pageY;
        plane.movePlane(clickY);

    }

    function checkPositionTouch(_event: MouseEvent): void {

        let clickY: number = _event.pageY;
        plane.movePlane(clickY);

    }

    function showName(): void {
        crc2.font = "30px Arial";
        crc2.fillStyle = "white";
        crc2.textAlign = "center";
        crc2.fillText("Player: " + inputs[0].value, 450, 50);

    }


}