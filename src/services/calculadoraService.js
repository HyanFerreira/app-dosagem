export class Calculadora {
  constructor(k, fc) {
    this.k = k;
    this.fc = fc;
  }

  abrams() {
    const a = Math.log10(this.k[0] / this.fc) / Math.log10(this.k[1]);
    return +a.toFixed(3);
  }

  lyse() {
    const m = this.k[2] + this.k[3] * this.abrams();
    return +m.toFixed(3);
  }

  molinari() {
    const c = 1000 / (this.k[4] + this.k[5] * this.lyse());
    return +c.toFixed(3);
  }
}
