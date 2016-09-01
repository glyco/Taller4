var edge = require('edge');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var val1 = 0.00;
var val2 = 0.00;

function promedio() {
	
	var addAndMultiplyBy2 = edge.func('calculo.csx');


	
	
	var wsb = new express.Router();
	wsb.use(cors());
	wsb.use(bodyParser());
	
	wsb.all('/', function(req, res) {
		
		val1 = parseFloat(req.body.valor1);
		val2 = parseFloat(req.body.valor2);
		
		
		
		var payload2 = {
				
				a: val1,
				b: val2
		};
		
		addAndMultiplyBy2(payload2, function(error, result){
			if(error)
				{
					return res.send(error);
				}
			console.log(result);
			return res.send('El promedio es : "' + result + '".');
			//if(error) throw error;result
			//console.log(result);
		});
		
	});

	return wsb;
}


module.exports = promedio;


