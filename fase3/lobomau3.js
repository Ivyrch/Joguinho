function escolher() {
  setTimeout(() => {
    var escolha = prompt(
      "Chapeuzinho começa a desconfiar da minha nova identidade de cachorro abandonado. O que eu faço? \n  1- Desisto desse disfarce antes de ser descoberto e ataco a vovó, afinal eu sou um Lobo! \n  2- finjo que amo a chapeuzinho para manter o disfarce"
    );
    while (escolha !== "1" && escolha !== "2") {
      alert("escolha invalida");
      escolha = prompt("digite 1 ou 2");
    }

    if (escolha == "1") {
      window.location.replace("../fase4/loboMau4.html");
    }

    if (escolha == "2") {
      window.location.replace("../fase4/loboMau5.html");
    }
  }, 1000);
}
