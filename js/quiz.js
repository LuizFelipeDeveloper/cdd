// JavaScript Document
 function checar1(){
	 var certo=0;
	 var resposta=quiz1.opcao.value;
	 if (resposta=="1500"){alert("Resposta Correta! Vamos à questão 2!"); window.location="#quest_2"; certo+=1};
	 if (certo=="0"){alert("Resposta Incorreta! Vamos lá... pense mais um pouco e tente novamente.");};
 }
 
 function checar2(){
	 var certo=0;
	 var resposta=quiz2.resposta.value;
	 if (resposta=="18"){alert("Acertou Novamente! Você será redirecionado para a próxima questão."); window.location="#quest_3"; certo+=1;};
	 if (certo=="0"){alert("Resposta Incorreta! Vamos lá... pense mais um pouco e tente novamente.");};
 }
 
function checar3(){
	 var certo=0;
	 var resposta=quiz3.resposta.value;
	 if (resposta=="10,55"){alert("Mais um acerto! Continue assim!"); window.location="#quest_4"; certo+=1;};
	 if (certo=="0"){alert("Resposta Incorreta! Vamos lá... pense mais um pouco e tente novamente.");};
 }
 
function checar4(){
	 var certo=0;
	 var resposta=quiz4.resposta.value;
	 if (resposta=="-4465"){alert("Perfeito! Estamos quase lá");window.location="#quest_5"; certo+=1;};
	 if (certo=="0"){alert("Resposta Incorreta! Vamos lá... pense mais um pouco e tente novamente.");};
 }
function checar5(){
	 var certo=0;
	 var resposta=quiz5.resposta.value;
	 if (resposta=="22"){alert("Parabéns, você conseguiu acertar a última pergunta e competar o nosso quiz!");window.location="#final"; certo+=1;};
	 if (certo=="0"){alert("Resposta Incorreta! Vamos lá... pense mais um pouco e tente novamente.");};
 }
 