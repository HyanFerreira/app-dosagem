export class Ensaio {
  constructor(
    {
      m = 5,
      cp = 13.56,
      alfa = 0,
      alfaantigo = 0,
      agua = 0,
      umidade = 0,
      pesobrita = 0,
      arredondamento = 3
    } = {}
  ) {
    this.m = m;
    this.cp = cp;
    this.alfa = alfa / 100; // para %
    this.agua = agua;
    this.umidade = umidade;
    this.pesobrita = pesobrita;
    this.alfaantigo = alfaantigo / 100;
    this.arredondamento = arredondamento;
  }

  massas_unitarias() {
    const cimento_unitario = 1;
    const areia_unitario = +(this.alfa * (1 + this.m) - 1).toFixed(
      this.arredondamento
    );
    const pedra_unitario = +(this.m - areia_unitario).toFixed(
      this.arredondamento
    );
    return [cimento_unitario, areia_unitario, pedra_unitario];
  }

  massas_iniciais() {
    const a = this.alfa * (1 + this.m) - 1;
    const p = this.m - a;
    const massa_cimento = +(this.pesobrita / p).toFixed(this.arredondamento);
    const massa_areia = +(this.pesobrita * a / p).toFixed(this.arredondamento);
    const massa_pedra = +this.pesobrita.toFixed(this.arredondamento);
    return [massa_cimento, massa_areia, massa_pedra];
  }

  massas_iniciais_antigas() {
    if (this.alfaantigo === 0) {
      return [0, 0, 0];
    }
    const a = this.alfaantigo * (1 + this.m) - 1;
    const p = this.m - a;
    const massa_cimento = +(this.pesobrita / p).toFixed(this.arredondamento);
    const massa_areia = +(this.pesobrita * a / p).toFixed(this.arredondamento);
    const massa_pedra = +this.pesobrita.toFixed(this.arredondamento);
    return [massa_cimento, massa_areia, massa_pedra];
  }

  quantidades_adicionar() {
    if (this.alfaantigo === 0) {
      return [0, 0];
    }
    const massa_antiga = this.massas_iniciais_antigas();
    const massa_nova = this.massas_iniciais();
    const adicionar_cimento = +(massa_nova[0] - massa_antiga[0]).toFixed(
      this.arredondamento
    );
    const adicionar_areia = +(massa_nova[1] - massa_antiga[1]).toFixed(
      this.arredondamento
    );
    return [adicionar_cimento, adicionar_areia];
  }

  umidade_agregado() {
    const fator_umidade = this.umidade / 100;
    const areia_seca = this.massas_iniciais()[1];
    const areia_umida = +(areia_seca / (1 - fator_umidade)).toFixed(
      this.arredondamento
    );
    const massa_de_agua = +(areia_umida - areia_seca).toFixed(
      this.arredondamento
    );
    return [areia_umida, massa_de_agua];
  }

  agua_cimento() {
    const cimento = this.massas_iniciais()[0];
    const ac = this.agua / cimento;
    return ac;
  }
}
