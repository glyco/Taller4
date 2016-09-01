var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var edge = require('edge');


var resultado = '';
var val1 = 0.00;
var val2 = 0.00;





app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//app.use('/promedio', require('./calculo5.js')());



app.post('/promedio', require('./calculo5.js')());



app.post('/myaction', function(req, res){
	
	
	val1 = parseFloat(req.body.valor1);
	val2 = parseFloat(req.body.valor2);
	
	
	
	res.send('El promedio es : "' + calculofinal() + '".');
});




http.listen(8000, function(){
	console.log('Cliente conectado en *:8000');
});


function calculofinal(){
	
	var resultado = '';
	
	var addAndMultiplyBy2 = edge.func('calculo.csx');

	var payload2 = {
			
			a: val1,
			b: val2
	};


	addAndMultiplyBy2(payload2, function(error, result){
		if(error) throw error;
		
		resultado = result;
	});
	
	return resultado;
	
	
}









