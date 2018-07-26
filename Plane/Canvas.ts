namespace Semesteraufgabe {

    window.addEventListener("load", start);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let plane: Plane;  
    export let bombsArray: any[] = [];
     
    let objects: Superclass[] = [];
    let positionBombs: number[] = []; 
   
    let imgData: ImageData;

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

        environment();
  
        plane = new Plane((Math.random() * 100) * 1400, Math.random() * crc2.canvas.height, "#CD0000");
        objects.push(plane);

        for (let i: number = 0; i < 7; i++) {
            let bombs: Bombe = new Bombe(Math.random() * (1000 - 700) + 0, Math.random() * 180, "yellow");
            objects.push(bombs);
            bombsArray.push(bombs);
        }

        for (let i: number = 0; i < 15; i++) {
            let clouds: Cloud = new Cloud(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "white");
            objects.push(clouds);
        }

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
    }

    function checkPositionPlane(_event: MouseEvent): void {                             
 
        let clickPositionY: number = _event.clientY;                                          
        let positionNemo: number = plane.checkPlane();                                      

        plane.movePlane(clickPositionY);                                          
        plane.collision();    
    }


}