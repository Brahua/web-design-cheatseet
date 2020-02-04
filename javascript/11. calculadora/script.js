alert('Bienvenido a la Calculadora');

function suma(){
	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var resultado = a+b;

	document.getElementById('resultado').value = resultado;
}

function resta(){
	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var resultado = a-b;

	document.getElementById('resultado').value = resultado;
}

function multiplicacion(){
	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var resultado = a*b;

	document.getElementById('resultado').value = resultado;
}

function division(){
	var a = parseFloat(document.getElementById('a').value);
	var b = parseFloat(document.getElementById('b').value);
	var resultado = a/b;

	document.getElementById('resultado').value = resultado;
}