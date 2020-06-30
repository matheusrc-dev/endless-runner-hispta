class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa
  }

  setup() {
    cenario = new Cenario(imagemCenario,imagemCenarioNuvem,imagemCenarioNuvem1,imagemCenarioNuvem2,imagemCenarioMontanha,imagemCenarioMontanha1,imagemChao, 5);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    troll = new Inimigo(matrizTroll, imagemTroll, width, 0, 200, 200, 400, 400, 10);
    inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 250, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(troll);
    inimigos.push(inimigoVoador);

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPontos();
    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(gameOver, width / 2 - 200, height / 2 - 30);
        somDoJogo.pause();
        noLoop();
      }
    }
    
    if(pontuacao.getPontos() == 251) {
       telaFimDeJogo = new FimDeJogo();
       telaFimDeJogo.draw();
       somDoJogo.pause();
       noLoop();
    }
  }
}