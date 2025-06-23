export class Regressao {
  constructor(
    valores_resistencia = [],
    valores_ac = [],
    valores_m = [],
    valores_C = [],
    arredondamento = 3
  ) {
    this.valores_resistencia_log = valores_resistencia.map(varr =>
      Math.log10(varr)
    );
    this.valores_ac = valores_ac;
    this.valores_m = valores_m;
    this.valores_C = valores_C;
    this.arredondamento = arredondamento;
    this.valores_C_alterados = valores_C.map(i => 1000 / i);
  }

  media(x) {
    return x.reduce((acc, val) => acc + val, 0) / x.length;
  }

  linear(x, y) {
    const media_x = this.media(x);
    const media_y = this.media(y);
    let sxx = 0,
      sxy = 0;

    for (let i = 0; i < x.length; i++) {
      sxx += Math.pow(x[i] - media_x, 2);
      sxy += (x[i] - media_x) * (y[i] - media_y);
    }

    const b = sxy / sxx;
    const a = media_y - b * media_x;

    return [a, b];
  }

  k1() {
    return +(10 **
      this.linear(this.valores_ac, this.valores_resistencia_log)[0]).toFixed(
      this.arredondamento
    );
  }
  k2() {
    return +(1 /
      10 **
        this.linear(this.valores_ac, this.valores_resistencia_log)[1]).toFixed(
      this.arredondamento
    );
  }
  k3() {
    return +this.linear(this.valores_ac, this.valores_m)[0].toFixed(
      this.arredondamento
    );
  }
  k4() {
    return +this.linear(this.valores_ac, this.valores_m)[1].toFixed(
      this.arredondamento
    );
  }
  k5() {
    return +this.linear(this.valores_m, this.valores_C_alterados)[0].toFixed(
      this.arredondamento
    );
  }
  k6() {
    return +this.linear(this.valores_m, this.valores_C_alterados)[1].toFixed(
      this.arredondamento
    );
  }
}
