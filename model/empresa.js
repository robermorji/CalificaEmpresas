var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var assert = require('assert');

var object;
var instancia;
var ExisteObjeto;

'use strict'
//Estructura de Datos
var Empresa = new Schema({
	nombre:{ 
			type:String,
			required: true 
	}
		
});
var Company = mongoose.model('Company', Empresa);

//Funciones
var obj_Empresa = {
	CreacionEmpresa: function(name){
		var objeto_new;
		objeto_new = new Company({nombre:name});
		return objeto_new;
	},

	ConectionBD: function(){
		
	mongoose.connect('mongodb://localhost/my_database');
		var db = mongoose.connection;
		
		db.on('error',console.error.bind(console, 'connection error:'));	
		db.once('open', function (callback) {
		console.log("Test Conection: Pasado con éxito");
			
		});
		return true;
	},
	verificar_creacion_empresa: function(ins){
		if (ins != undefined){
			return true;
		}
		return false;
	},
	
	eliminar_empresa: function(objeto_delete){
		delete  objeto_delete.nombre;
		console.log(objeto_delete.nombre);
		return objeto_delete;
	}
}


//Instancias
instancia = obj_Empresa.CreacionEmpresa("NuevaEmpresa");
object = obj_Empresa.CreacionEmpresa("NuevaEmpresa");
ExisteObjeto = obj_Empresa.verificar_creacion_empresa(instancia);

//Aserciones
assert.equal(ExisteObjeto,true,"El objeto debe ser creado");
assert.equal(instancia.nombre,"NuevaEmpresa","El objeto debe ser NuevaEmpresa");
assert.notEqual(object,undefined,"El objeto debe ser creado");
assert.notDeepEqual(instancia,object,"Los objetos deben ser iguales");

console.log("Enhorabuena: Todas las aserciones han sido pasadas con éxito");




if ( typeof module != 'undefined' && module.exports ) {
	module.exports = obj_Empresa;
}
//module.exports = mongoose.model('Empresa', Empresa);
