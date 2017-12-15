
function OlheParaCimaEDiga(sequenciaAtual, quantidadeDeLinhas)
{
	quantidadeDeLinhas--;

	sequenciaAtual = sequenciaAtual.split('');
	var sequenciaSeguinte = '';
	var quantidadeDeRepeticoes = 0;

	var indexDePosicoes = 0;

	if (sequenciaAtual.length == 1) {
		console.log(sequenciaAtual[0]);
	}

	for(var i = 0; i < sequenciaAtual.length; i++){
	
		var elementoAtual = sequenciaAtual[i]; 

		while(elementoAtual == sequenciaAtual[indexDePosicoes]){
			
			indexDePosicoes++; 
			quantidadeDeRepeticoes++;	
		}
		if (quantidadeDeRepeticoes > 0)
			sequenciaSeguinte = sequenciaSeguinte + quantidadeDeRepeticoes  +  elementoAtual ;

		quantidadeDeRepeticoes = 0;
	}


	
	if(quantidadeDeLinhas > 0){
		console.log(sequenciaSeguinte);
		OlheParaCimaEDiga(sequenciaSeguinte, quantidadeDeLinhas);
	}


}

OlheParaCimaEDiga('X', 5);
