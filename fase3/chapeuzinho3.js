function escolher () {
    setTimeout(() => {
       var escolha= prompt("Me ajude novamente a pensar numa solução! \n  1- Colocar cartazes com a cara do caçador pela floresta dizendo estar em busca de lobos  \n  2- Contratar alguém para se fingir de caçador"); 
     while ( escolha !== "1" && escolha !== "2"){
        alert ("escolha invalida");
        escolha = prompt ("digite 1 ou 2");} 
  
  
  if (escolha =='1') { 
     window.location.replace( "../gameOver3.html") 
  }
  
  if (escolha =='2') { 
     window.location.replace( "../fase4/chapeuzinha4.html")
  }
  
  }, 1000)
  
   } 
    