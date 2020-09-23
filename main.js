var name = prompt ("Coloque o sue nome");
var teste = prompt ("Coloque o número correspondente a sua resposta, quer iniciar teste? 1. Sim 2. Não");
var respostaErrada1;
var respostaCerta1;
var respostaErrada2;
var respostaCerta2;
var respostaErrada3;
var respostaCerta3;

document.getElementById("name").innerHTML="OLÁ, " + name + "!";

// Condição se/senão do usuário optar em entrar no desafio.
    if (teste == "1") 
    {
        var primeiraPergunta = prompt ("Quanto é 2+2? 1:4 2:5 3:6");
        var segundaPergunta = prompt ("Quanto é 3+2? 1:4 2:5 3:6");
        var terceiraPergunta = prompt ("Quanto é 4+2? 1:4 2:5 3:6");
    } 
        else 
        { 
            console.log ("Teste Finalizado");
        }
        
//Condição Primeira Pergunta

            if (primeiraPergunta == "2" )
            {
                document.getElementById("Errado1").innerHTML="Errado1";
            }
            else if (primeiraPergunta ==  "3")
            {
                document.getElementById("Errado1").innerHTML="Errado1";
            }
            else if (primeiraPergunta == "1")
            {
                document.getElementById("Certo1").innerHTML="Certo1";
            }
         
//Segunda Pergunta

                        if (segundaPergunta == "1" )
                        {
                            document.getElementById("Errado2").innerHTML="Errado2";
                        }
                        else if (segundaPergunta ==  "3")
                        {
                            document.getElementById("Errado2").innerHTML="Errado2";
                        }
                        else if (segundaPergunta == "2")
                        {
                            document.getElementById("Certo2").innerHTML="Certo2";
                        }

 //Terceira Pergunta                           
                            if (terceiraPergunta == "1")
                            {
                                document.getElementById("Errado3").innerHTML="Errado3";
                            }

                            else if (terceiraPergunta == "2")
                            {
                                document.getElementById("Errado3").innerHTML="Errado3";
                            }

                            else if (terceiraPergunta == "3")
                            {
                                document.getElementById("Certo3").innerHTML="Certo3";
                            }      


  



