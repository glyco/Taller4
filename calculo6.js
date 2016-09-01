var edge = require('edge');




function hola() {
	var resultado = '';
	
	var addAndMultiplyBy2 = edge.func('calculo.csx');

	var payload2 = {
			
			a: 33.45,
			b: 20.15
	};


	addAndMultiplyBy2(payload2, function(error, result){
		if(error) throw error;
		//console.log(result);
		resultado = result;
	});
	
	return resultado;
}

console.log(hola());