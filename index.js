const arrayImagens = [
  "imagens/pedra.png",
  "imagens/papel.png",
  "imagens/tesoura.png"
];
const divParteMeio = document.querySelector(".parte-do-meio");
let acumulador = 0;
const timer = setInterval(() => {
  divParteMeio.innerHTML = "";
  const img = document.createElement("img");
  img.src = arrayImagens[acumulador];
  img.classList.add("img-width");
  divParteMeio.append(img);
  acumulador++;
  if(acumulador == 3){
    acumulador = 0;
  }
}, 1000);

document.addEventListener("click", (event) => {
  const elemento = event.target;
  if(elemento.classList.contains("iniciar-btn")){
    clearInterval(timer);
    criarNovaTela();
    placar();
    bodyInicio();
    criarOpcoes();
  }
  if(elemento.classList.contains("pedra")){
    bodyJogo(0);
  }
  if(elemento.classList.contains("papel")){
    bodyJogo(1);
  }
  if(elemento.classList.contains("tesoura")){
    bodyJogo(2);
  }
  if(elemento.classList.contains("jogar-novamente")){
    criarNovaTela();
    placar();
    bodyInicio();
    criarOpcoes();
  }
  if(elemento.classList.contains("sair")){
    alert("tt");
  }
});

const criarNovaTela = () => {
  const parteDoMeio = document.querySelector(".parte-do-meio");
  parteDoMeio.innerHTML = "";
}

const placar = () => {
  const parteDoMeio = document.querySelector(".parte-do-meio");
  const divPlacar = document.createElement("div");
  divPlacar.classList.add("placar");
  const ladoEsquerdo = document.createElement("div");
  ladoEsquerdo.classList.add("lado-esquerdo");
  ladoEsquerdo.innerHTML = "Jogador: <span class='ponto-jogador'>0</span>";
  const ladoDireito = document.createElement("div");
  ladoDireito.classList.add("lado-direito");
  ladoDireito.innerHTML = "Máquina: <span class='ponto-maquina'>0</span>";
  divPlacar.append(ladoEsquerdo);
  divPlacar.append(ladoDireito);
  parteDoMeio.append(divPlacar);
}

const bodyInicio = () => {
  const parteDoMeio = document.querySelector(".parte-do-meio");
  const divBody = document.createElement("div");
  divBody.classList.add("body-inicio");
  divBody.innerHTML = "Escolha uma opção para começar o jogo!";
  parteDoMeio.append(divBody);
}

const bodyJogo = (escolhaJogador) => {
  const divBody = document.querySelector(".body-inicio");
  divBody.innerHTML = "";
  criarDivEsquerda(escolhaJogador);
}

const criarDivEsquerda = (escolhaJogador) => {
  const divBody = document.querySelector(".body-inicio");
  const divJogada = document.createElement("div");
  divJogada.classList.add("jogada");
  const divEsquerda = document.createElement("div");
  divEsquerda.classList.add("esquerda-width");
  const imgJogador = document.createElement("img");
  imgJogador.classList.add("img-jogador");
  imgJogador.src = arrayImagens[escolhaJogador];
  divEsquerda.append(imgJogador);
  divJogada.append(divEsquerda);
  divBody.append(divJogada);
  criarDivMeio(escolhaJogador);
}

const criarDivMeio = (escolhaJogador) => {
  const divJogada = document.querySelector(".jogada");
  const divMeio = document.createElement("div");
  divMeio.innerHTML = "VS";
  divMeio.classList.add("meio");
  divJogada.append(divMeio);
  criarDivDireita(escolhaJogador);
}

const criarDivDireita = (escolhaJogador) => {

  const arrayNomes = [
    "pedra",
    "papel",
    "tesoura"
  ];

  const numeroAleatorio = Math.floor(Math.random() * (3 - 0) + 0);
  const divJogada = document.querySelector(".jogada");
  const divDireita = document.createElement("div");
  divDireita.classList.add("direita-width");
  const imgMaquina = document.createElement("img");
  imgMaquina.classList.add("img-jogador");
  imgMaquina.src = arrayImagens[numeroAleatorio];
  divDireita.append(imgMaquina);
  divJogada.append(divDireita);

  let jogador = arrayNomes[escolhaJogador];
  let maquina = arrayNomes[numeroAleatorio];

  if(jogador == "pedra" && maquina == "tesoura"){
    resultado("Jogador ganhou!");
   somarJogador();
  }

  if(jogador == "pedra" && maquina == "pedra"){
    resultado("Empate!");
  }

  if(jogador == "pedra" && maquina == "papel"){
   resultado("Máquina ganhou!");
   somarMaquina();
  }

  if(jogador == "papel" && maquina == "pedra"){
    resultado("Jogador ganhou!");
    somarJogador();
  }

  if(jogador == "papel" && maquina == "papel"){
    resultado("Empate!");
  }

  if(jogador == "papel" && maquina == "tesoura"){
    resultado("Máquina ganhou!");
    somarMaquina();
  }

  if(jogador == "tesoura" && maquina == "papel"){
    resultado("Jogador ganhou!");
    somarJogador();
  }

  if(jogador == "tesoura" && maquina == "tesoura"){
    resultado("Empate!");
  }

  if(jogador == "tesoura" && maquina == "pedra"){
    resultado("Máquina ganhou!");
    somarMaquina();
  }

}

const resultado = (result) => {
  const divBody = document.querySelector(".body-inicio");
  const resultadoJogo = document.createElement("div");
  resultadoJogo.classList.add("resultado");
  resultadoJogo.innerHTML = "";
  resultadoJogo.innerHTML = result;
  divBody.append(resultadoJogo);
}

const somarJogador = () => {
  const pontosJogador = document.querySelector(".ponto-jogador");
  let pontuacao = pontosJogador.innerHTML;
  pontuacao++;
  pontosJogador.innerHTML = pontuacao;
  encerrarJogador(pontuacao);
}

const somarMaquina = () => {
  const pontosMaquina = document.querySelector(".ponto-maquina");
  let pontuacao = pontosMaquina.innerHTML;
  pontuacao++;
  pontosMaquina.innerHTML = pontuacao;
  encerrarMaquina(pontuacao);
}

const encerrarJogador = (pontuacao) => {
  if(pontuacao == 5){
    const parteDoMeio = document.querySelector(".parte-do-meio");
    parteDoMeio.innerHTML = "";
    const divBody = document.createElement("div");
    divBody.classList.add("div-final");
    parteDoMeio.append(divBody);
    const divMsg = document.createElement("div");
    divMsg.classList.add("div-msg");
    divMsg.innerHTML = "Você ganhou!!";
    const imgFinal = document.createElement("img");
    imgFinal.classList.add("img-final");
    imgFinal.src = "imagens/ganhou.png";
    divBody.append(divMsg);
    divBody.append(imgFinal);
    footerFinal();
  }
}

const encerrarMaquina = (pontuacao) => {
  if(pontuacao == 5){
    const parteDoMeio = document.querySelector(".parte-do-meio");
    parteDoMeio.innerHTML = "";
    const divBody = document.createElement("div");
    divBody.classList.add("div-final");
    parteDoMeio.append(divBody);
    const divMsg = document.createElement("div");
    divMsg.classList.add("div-msg");
    divMsg.innerHTML = "Você perdeu!!";
    const imgFinal = document.createElement("img");
    imgFinal.classList.add("img-final");
    imgFinal.src = "imagens/perdeu.png";
    divBody.append(divMsg);
    divBody.append(imgFinal);
    footerFinal();
  }
}

const footerFinal = () => {
  const footer = document.querySelector(".parte-de-baixo");
  footer.innerHTML = "";
  const footerGeral = document.createElement("div");
  footerGeral.classList.add("footer-geral");
  const footerEsquerdo = document.createElement("div");
  footerEsquerdo.classList.add("footer-esquerdo");
  footerEsquerdo.classList.add("jogar-novamente");
  footerEsquerdo.innerHTML = "INICIAR";
  const footerDireito = document.createElement("div");
  footerDireito.classList.add("footer-esquerdo");
  footerDireito.classList.add("sair");
  footerDireito.innerHTML = "SAIR";
  const img = document.createElement("img");
  img.src = "imagens/teste2.png";
  img.classList.add("borda");
  footerGeral.append(footerEsquerdo);
  footerGeral.append(footerDireito);
  footer.append(footerGeral);
  footer.append(img);
}

const criarOpcoes = () => {
  const arrayNomes = [
    "pedra",
    "papel",
    "tesoura"
  ];
  const parteDeBaixo = document.querySelector(".parte-de-baixo");
  parteDeBaixo.innerHTML = "";
  const opcoes = document.createElement("div");
  opcoes.classList.add("opcoes-width");
  for(let i = 0; i < 3; i++){
    const div = document.createElement("div");
    div.classList.add("img-width-opcoes");
    div.classList.add(arrayNomes[i]);
    const imgOpcoes = document.createElement("img");
    imgOpcoes.src = arrayImagens[i];
    imgOpcoes.classList.add("borda");
    imgOpcoes.classList.add(arrayNomes[i]);
    div.append(imgOpcoes);
    opcoes.append(div);
    parteDeBaixo.append(opcoes);
  }
  const img = document.createElement("img");
  img.src = "imagens/teste2.png";
  img.classList.add("borda");
  parteDeBaixo.append(img);
}