const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isMove = false;

class Player {
    constructor() {
        this.x = innerWidth / 2;
        this.y = innerHeight / 2;
        this.width = 30;
        this.height = 30;
        this.color = "green";
    }
    
    draw() {
        isMove = true;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}



function resize() {
    const { innerWidth, innerHeight } = window;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
}

function render() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    player.draw();

    window.addEventListener("keyup", (event) => {
        
        if(event.code == "KeyK") {
            player.color = "red";
        }
        
        if(event.code == "KeyL") {
            player.width += 0.1;
            player.height += 0.1;
        }
        
        if(
            event.code == "KeyD" &&
            isMove &&
            player.x < (canvas.width - player.width)
        ) {
            isMove = false;
            player.x += player.width;
        }
        
        if(
            event.code == "KeyA" &&
            isMove &&
            player.x > 5
        ) {
            isMove = false;
            player.x -= player.width;
        }
        
        if(
            event.code == "KeyS" &&
            isMove &&
            player.y < (canvas.height - 40)
        ) {
            isMove = false;
            player.y += player.width;
        }
        
        if(
            event.code == "KeyW" &&
            isMove &&
            player.y > 5
        ) {
            isMove = false;
            player.y -= player.width;
        }
    });

    requestAnimationFrame(render);
}
requestAnimationFrame(render);

let player = new Player();
window.onload = resize;
window.addEventListener("resize", resize);