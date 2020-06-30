function preload() {
  imagemCenario = loadImage('imagens/cenario/sky.png');
  imagemCenarioNuvem = loadImage('imagens/cenario/cloud.png');
  imagemCenarioNuvem1 = loadImage('imagens/cenario/cloud1.png');
  imagemCenarioNuvem2 = loadImage('imagens/cenario/cloud2.png');
  imagemCenarioMontanha = loadImage('imagens/cenario/mountain2.png');
  imagemCenarioMontanha1 = loadImage('imagens/cenario/mountain.png');
  imagemChao = loadImage('imagens/cenario/Water.png');
  
  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  gameOver = loadImage('imagens/assets/game-over.png');
  
  imagemTelaInicial = loadImage('imagens/cenario/background_glacial_mountains.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  fita = loadJSON('fita/fita.json');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/jump.mp3');
}