console.log('js cargado');
// Importo
import { width } from "./canvas.js";
import { height } from "./canvas.js";
import { Ball } from "./class.js";
import { random } from "./canvas.js";
import { ctx } from "./canvas.js";

const balls = [];

while (balls.length < 56) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size
    );

    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; //El fondo se ve verde y es debido a esto, lo cambio a 0,0,0 que es negro
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball !== otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    }

    requestAnimationFrame(loop);
}

loop();