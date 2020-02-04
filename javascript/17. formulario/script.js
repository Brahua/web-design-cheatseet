(function(){

	var formulario = document.getElementById('form');
	var nombre = formulario.nombre;
	var email = formulario.email;
	var sexo = formulario.sexo;
	var terminos = formulario.terminos;
	var errores = document.getElementById('error');

	function validarFormulario(e){
		errores.innerHTML = '';
		error.style.display= 'none';

		if (nombre.value == '' || nombre.value == null) {
			error.style.display = 'block';
			errores.innerHTML += '<li>Por favor, ingrese sus nombres.</li>';
		}
		if (email.value == '' || email.value == null) {
			error.style.display = 'block';
			errores.innerHTML += '<li>Por favor, ingrese su email.</li>';
		}
		if (sexo.value == '' || sexo.value == null) {
			error.style.display = 'block';
			errores.innerHTML += '<li>Por favor, seleccione su sexo.</li>';
		}
		if (!terminos.checked) {
			error.style.display = 'block';
			errores.innerHTML += '<li>Por favor, acepte los términos y condiciones.</li>';
		}

		e.preventDefault();
	}

	formulario.addEventListener('submit', validarFormulario);
	
}())