class TelaInicial {
  constructor() {
    
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width/2, height / 2 - 250);   
    textSize(150);
    text('Hipsta', width / 2, height / 2 - 125); 
    textSize(30);
    text(' A bruxa coracao de gelo acabou perdendo sua amiga', width / 2, height / 2 - 25);
    text('enquanto colhiam ingedientes no frio das montanhas do norte,', width / 2, height / 2);
    text('agora ela precisa da sua ajuda para encontra-la, mas cuidado', width / 2, height / 2 + 25);
    text('a trilha e imprevisivel e muitas vezes perigosa', width / 2, height / 2 + 50);
  }
  
  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}