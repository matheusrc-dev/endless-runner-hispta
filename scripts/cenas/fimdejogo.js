class FimDeJogo {
  constructor() {
    
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    fill("#000");
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width/2, height / 2 - 250);   
    textSize(150);
    text('Hipsta', width / 2, height / 2 - 125); 
    textSize(30);
    text('Eba! Voce ajudou a Bruxa coracao de gelo a econtrar sua amiga,', width / 2, height / 2 - 25);
    text('Bruxilda, agora elas podem continuar a sua busca pelos ingre-', width / 2, height / 2);
    text('dientes pelas montanhas. Clique abaixo para jogar novamente', width / 2, height / 2 + 25);
    textSize(40);
    text('Reinicie a pagina para jogar novamente', width / 2, height / 2 + 125);
    
  }
}