const SPEED = 0.02;
export default class Paddle {
  constructor(paddleEl) {
    this.paddleEl = paddleEl;
    this.reset();
  }

  get position() {
    return getComputedStyle(this.paddleEl).getPropertyValue("--position");
  }
  set position(value) {
    this.paddleEl.style.setProperty("--position", value);
  }

  update(delta, ballHeight) {
    this.position = this.position * 1.001;
    console.log(this.position);
  }
  reset() {
    this.position = 50;
  }
}
