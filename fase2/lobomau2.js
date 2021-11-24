function escolher() {
  setTimeout(() => {
    var escolha = prompt(
      "Obrigado por me ajudar! Estava pensando aqui qual você acha que seria a melhor estratégia? \n  1- se fantasiar de uma amiga da vovó e ataca-la \n  2- fingir que sou um cachorro grande em busca de um lar"
    );
    while (escolha !== "1" && escolha !== "2") {
      alert("escolha invalida");
      escolha = prompt("digite 1 ou 2");
    }

    if (escolha == "1") {
      window.location.replace("../fase4/loboMau4.html");
    }

    if (escolha == "2") {
      window.location.replace("../fase3/lobomau3.html");
    }
  }, 1000);
}
