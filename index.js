function fase1Chapeuzinho() {
  var escolha = prompt(
    "Preciso que você me ajude a pegar o lobo antes dele atacar a minha avó! \n Você me ajudaria? \n digite sim ou não"
  );
  while (escolha !== "sim" && escolha !== "não") {
    alert("Escolha invalida");
    escolha = prompt("digite sim ou não");
  }

  if (escolha == "sim") {
    window.location.replace("../fase2/chapeuzinho2.html");
  } else {
    window.location.replace("../gameover1.html");
  }
}

function fase1Vovozinha() {
  var escolha = prompt(
    "Olá! você teria como me ajudar a fugir do Lobo Mau? Preciso me proteger. \n você me ajudaria? \n digite sim ou não"
  );
  while (escolha !== "sim" && escolha !== "não") {
    alert("Escolha inválida");
    escolha = prompt("digite sim ou não");
  }

  if (escolha == "sim") {
    window.location.replace("../fase2/vovozinha2.html");
  } else {
    window.location.replace("../gameover1.html");
  }
}

function fase1LoboMau() {
  var escolha = prompt(
    "Obrigado por me escolhe! Me ajude a pegar a Vovózinha! Não me alimento tem dias e preciso de ajuda para não morrer de fome!! \n Você me ajudaria? \n digite sim ou não"
  );
  while (escolha !== "sim" && escolha !== "não") {
    alert("Escolha inválida");
    escolha = prompt("digite sim ou não");
  }

  if (escolha == "sim") {
    window.location.replace("../fase2/lobomau2.html");
  } else {
    window.location.replace("../gameover2.html");
  }
}
