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
var telephone = $('#input-phone')[0];
var publicar = $('#publicar')[0];
var publicaciones = $('#publicaciones')[0];
$(publicaciones).addClass("card");
var nombre = $('#input-name')[0];
var correo = $('#input-mail')[0];

$(publicar).on('click', agregarContacto);

function agregarContacto(){
  var articulo = document.createElement("section");
  var parrafo = document.createElement("p");
  var parrafo2 = document.createElement("h5");
  var parrafo3 = document.createElement("p");
  parrafo2.innerText = nombre.value;
  parrafo.innerText = telephone.value;
  parrafo3.innerText = correo.value;
  articulo.append(parrafo2);
  articulo.append(parrafo);
  articulo.append(parrafo3);
  publicaciones.before(articulo, publicaciones.firstChild);
  telephone.value = "";
  nombre.value = "";
  correo.value = "";
  cleanModal("modalContact");
 };