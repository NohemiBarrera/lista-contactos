//Función que incializa los modales
$(document).ready(function(){
    $('.modal').modal();
});

//limpiar modal
function cleanModal(id) {
	let inputs = document.querySelectorAll('#' + id + ' input');
	for (let input of inputs) {
		input.value = '';
	}
	inputs = document.querySelectorAll('#' + id + ' input');
	for (let input of inputs) {
		input.value = '';
	}
	$('#' + id).modal('close');
}

 //archivos
var newTxt = document.getElementById("modal-phone");
var publicar = document.getElementById("publicar");
var publicaciones = document.getElementById("publicaciones");
publicaciones.setAttribute("class", "card")
var nombre = document.getElementById("modal-name");
var correo = document.getElementById("modal-mail");

/*newTxt.addEventListener("keyup", contadorDeCaracteres);*/
publicar.addEventListener("click", agregarContacto);

/*function contadorDeCaracteres(){
  var numeroCaracteres = newTxt.value.length;
  document.getElementById("caracteres").innerText = numeroCaracteres;
}*/

function agregarContacto(){
  var articulo = document.createElement("section");
  var parrafo = document.createElement("p");
  var parrafo2 = document.createElement("h5");
  var parrafo3 = document.createElement("p");
  parrafo2.innerText = nombre.value;
  parrafo.innerText = newTxt.value;
  parrafo3.innerText = correo.value;
  articulo.appendChild(parrafo2);
  articulo.appendChild(parrafo);
  articulo.appendChild(parrafo3);
  publicaciones.insertBefore(articulo, publicaciones.firstChild);
  newTxt.value = "";
  nombre.value= "";
  correo.value = "";
  cleanModal("modalMsj");
 };