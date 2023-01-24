const INITIAL_VELOCITY = 0.025;

export default class Ball {
  constructor(ballEl) {
    this.ballEl = ballEl;
  }

  get x() {
    return parseFloat(getComputedStyle(this.ballEl).getPropertyValue("--x"));
  }

  set x(value) {
    this.ballEl.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballEl).getPropertyValue("--y"));
  }

  set y(value) {
    this.ballEl.style.setProperty("--y", value);
  }

  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0.75, y: 0.5 };
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
    this.velocity = INITIAL_VELOCITY;
  }

  update(delta) {
    this.x += this.direction.x * INITIAL_VELOCITY * delta;
    this.y += this.direction.y * INITIAL_VELOCITY * delta;
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}
