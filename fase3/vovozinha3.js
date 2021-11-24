function escolher() {
  setTimeout(() => {
    var escolha = prompt(
      "Estou um pouco apreensiva. Você tem certeza que fugir seria o melhor dos planos para uma idosa? \n digite: \n 1- sim, tenho certeza dessa decisão ou \n 2- não, é melhor voltar para casa e chamar ajuda!"
    );
    while (escolha !== "1" && escolha !== "2") {
      alert("escolha invalida");
      escolha = prompt("digite 1 ou 2");
    }

    if (escolha == "1") {
      window.location.replace("../fase4/vovozinha4.html");
    }

    if (escolha == "2") {
      window.location.replace("../fase4/vovozinha6.html");
    }
  }, 1000);
}

function escolha2() {
  setTimeout(() => {
    var escolha = prompt(
      "Enquanto o lobo está distraido com os bolinhos o que você acha que eu devo fazer? \n digite: \n 1- atacar o lobo por tras com um machado na cabeça ou \n 2- não fazer nada, e tentar conversar com ele sobre parar de comer pessoas"
    );
    while (escolha !== "1" && escolha !== "2") {
      alert("escolha invalida");
      escolha = prompt("digite 1 ou 2");
    }

    if (escolha == "1") {
      window.location.replace("../gameover1.html");
    }

    if (escolha == "2") {
      window.location.replace("../fase4/vovozinha5.html");
    }
  }, 1000);
}
