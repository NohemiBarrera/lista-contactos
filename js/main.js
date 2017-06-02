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
var telephone = document.getElementById("input-phone");
var publicar = document.getElementById("publicar");
var publicaciones = document.getElementById("publicaciones");
publicaciones.setAttribute("class", "card")
var nombre = document.getElementById("input-name");
var correo = document.getElementById("input-mail");

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
  parrafo.innerText = telephone.value;
  parrafo3.innerText = correo.value;
  articulo.appendChild(parrafo2);
  articulo.appendChild(parrafo);
  articulo.appendChild(parrafo3);
  publicaciones.insertBefore(articulo, publicaciones.firstChild);
  telephone.value = "";
  nombre.value= "";
  correo.value = "";
  cleanModal("modalContact");
 };