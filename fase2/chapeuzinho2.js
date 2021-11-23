function escolher() {
  setTimeout(() => {
    var escolha = prompt(
      "Pensei em enganar o lobo enquanto ele ainda está na floresta! Me ajude a escolher um método de enganação! \n  1- fingir que o tem um caçador de lobos na região \n  2- colocar uma placa na casa da vovózinha dizendo ser a casa de uma bruxa!"
    );
    while (escolha !== "1" && escolha !== "2") {
      alert("escolha invalida");
      escolha = prompt("digite 1 ou 2");
    }

    if (escolha == "1") {
      window.location.replace("../fase3/chapeuzinho3.html");
    }

    if (escolha == "2") {
      window.location.replace("../fase4/chapeuzinha4.html");
    }
  }, 1000);
}
