//Función que se encarga de utilizar JQuery de la aplicación

$(document).ready(function(){
	$("#crear_empresa").on("click",creacion_Empresa);
	$("#listar_empresa").on("click",listar_Empresa);
	$("#crear_calificacion").on("click",crear_Calificacion);
	$("#editar_calificacion").on("click",add_Calificacion);
	$("#borrar_calificacion").on("click",delete_Calificacion);
	
});
//creacion_Empresa
function creacion_Empresa(){
	console.log("Creando Empresa ..... ");
	show_or_hidden("block", "none", "none","none","none");
}
// lista las empresas
function listar_Empresa(){
	console.log("Listar Empresa ..... ");
	show_or_hidden("none", "block", "none","none","none");	
}
//crear_calificacion
function crear_Calificacion(){
	console.log("Crear Calificacion ..... ");
	show_or_hidden("none", "none", "block","none","none");	
}
// Añadir Calificacion
function add_Calificacion(){
	console.log("Editar Calificacion ..... ");
	show_or_hidden("none", "none", "none","block","none");
}
// borrar Calificacion
function delete_Calificacion(){
	console.log("Delete Calificacion ..... ");
	show_or_hidden("none", "none", "none","none","block");	
}
// ocultar o mostrar dependiendo de la ejecución del botón
function show_or_hidden(creacion_empresa, listar_empresa,creacion_puntuacion,editar_puntuacion, delete_puntuacion ){
	$(".creacion_empresa").css("display",creacion_empresa);
	$(".listar_empresa").css("display",listar_empresa);
	$(".creacion_puntuacion").css("display",creacion_puntuacion);
	$(".editar_puntuacion").css("display",editar_puntuacion);
	$(".delete_puntuacion").css("display",delete_puntuacion);
}