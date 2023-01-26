const SPEED = 0.15;

export default class Paddle {
  constructor(paddleEl) {
    this.paddleEl = paddleEl;
    this.reset();
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleEl).getPropertyValue("--position")
    );
  }
  set position(value) {
    this.paddleEl.style.setProperty("--position", value);
  }

  update(delta, ballHeight) {
    this.position += SPEED * (ballHeight - this.position);
  }
  reset() {
    this.position = 50;
  }
}
