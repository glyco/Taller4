using System.Collections.Generic;
	 
async (dynamic data) =>
{
	double sum = (double)data.a + (double)data.b;
	var resultado = sum / 2;	 	
	return  resultado;
}