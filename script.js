import Ball from "./ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime;
function update(time) {
  if (lastTime != true) {
    const delta = time - lastTime;
    // UPDATE CODE
    ball.update(delta);
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
