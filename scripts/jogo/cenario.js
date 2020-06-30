class Cenario {
  constructor(imagem, imagem1, imagem2, imagem3, imagem4, imagem5,chao, velocidade){
    this.imagem = imagem;
    this.imagem1 = imagem1;
    this.imagem2 = imagem2;
    this.imagem3 = imagem3;
    this.imagem4 = imagem4;
    this.imagem5 = imagem5;
    this.chao = chao;
    this.velocidade = velocidade;
    
    this.x1 = 0;
    this.x2 = width;
    
    this.img1x1 = 0;
    this.img1x2 = width;
    
    this.img2x1 = 0;
    this.img2x2 = width;
    
    this.img3x1 = 0;
    this.img3x2 = width;
    
    this.img4x1 = 0;
    this.img4x2 = width;
    
    this.img5x1 = 0;
    this.img5x2 = width;
  }
  
  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem,this.x2, 0, width, height);
    
    image(this.imagem1, this.img1x1, 0, width + 10, height);
    image(this.imagem1,this.img1x2, 0, width + 10, height);
    
    image(this.imagem2, this.img2x1, 0, width + 10, height);
    image(this.imagem2,this.img2x2, 0, width + 10, height);
    
    image(this.imagem3, this.img3x1, 0, width + 10, height);
    image(this.imagem3,this.img3x2, 0, width + 10, height);
    
    image(this.imagem4, this.img4x1, 0, width + 10, height);
    image(this.imagem4,this.img4x2, 0, width + 10, height);
    
    image(this.imagem5, this.img5x1, 50, width + 10, height);
    image(this.imagem5,this.img5x2, 50, width + 10, height);
    
    image(this.chao,this.img5x1, height - 45, width + 10, 150);
    image(this.chao,this.img5x2, height - 45 , width + 10, 150);
    
    
  }
  
  move() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    
    this.img1x1 = this.img1x1 - this.velocidade / 5;
    this.img1x2 = this.img1x2 - this.velocidade / 5;
    
    this.img2x1 = this.img2x1 - this.velocidade / 4;
    this.img2x2 = this.img2x2 - this.velocidade / 4;
    
    this.img3x1 = this.img3x1 - this.velocidade / 3;
    this.img3x2 = this.img3x2 - this.velocidade / 3;
    
    this.img4x1 = this.img4x1 - this.velocidade / 2;
    this.img4x2 = this.img4x2 - this.velocidade / 2;
    
    this.img5x1 = this.img5x1 - this.velocidade / 1.2;
    this.img5x2 = this.img5x2 - this.velocidade / 1.2;
    
    
    
    if (this.x1 < -width){
      this.x1 = width;
    }
    if (this.x2 < -width){
      this.x2 = width;
    }
    
    if (this.img1x1 < -width){
      this.img1x1 = width;
    }
    if (this.img1x2 < -width){
      this.img1x2 = width;
    }
    
    if (this.img2x1 < -width){
      this.img2x1 = width;
    }
    if (this.img2x2 < -width){
      this.img2x2 = width;
    }
    
    
    if (this.img3x1 < -width){
      this.img3x1 = width;
    }
    if (this.img3x2 < -width){
      this.img3x2 = width;
    }
    
    if (this.img4x1 < -width){
      this.img4x1 = width;
    }
    if (this.img4x2 < -width){
      this.img4x2 = width;
    }
    
    if (this.img5x1 < -width){
      this.img5x1 = width;
    }
    if (this.img5x2< -width){
      this.img5x2 = width;
    }
    
  }
}