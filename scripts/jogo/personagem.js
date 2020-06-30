class Personagem extends Animacao{
  constructor(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x,variacaoY ,largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.quantidadeDePulos = 0;
    this.invencivel = false;
  }
  
  anima(){
    this.frameAtual++
    if(this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0
    }
  }
  
  pula() {
    this.quantidadeDePulos++;
    
    if(this.quantidadeDePulos <= 2){
      this.velocidadeDoPulo = this.alturaDoPulo;
      somDoPulo.play();
    }
    
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.quantidadeDePulos = 0;
    }
  }
  
  
  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false;
    }
    
    const precisao = .7;
    
    /*noFill();
    
    rect(this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,);
    rect(inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao);
      
      */
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }

}