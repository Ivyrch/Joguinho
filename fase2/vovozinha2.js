
function escolher() {
setTimeout(() => {
    var escolha= prompt("Obrigada por me ajudar! Tive algumas ideias que podem me ajudar nesse meu plano de fugir do Lobo Mau que fica rondando por aqui! \n 1- Fugir e se esconder \n 2- fazer uns bolinhos vegetarianos pro lobo!");
   while ( escolha !== "1" && escolha !== "2"){
       alert("escolha invalida");
      escolha = prompt("digite 1 ou 2");} 
 
 
  if (escolha =='1') 
  
  { window.location.replace ("../fase3/vovozinha3.html")}
 
 if (escolha =='2') 
 window.location.replace( "../fase3/vovozinha3.1.html")
    

}, 1000)

} 

