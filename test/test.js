var assert = require('assert');
var empresa = require('../model/empresa.js');
var should = require('should');

describe('Prueba',function(){
  it("Test Creacion Empresa",function(){
      var instancia = empresa.CreacionEmpresa("NuevaEmpresa");
      var existe = empresa.verificar_creacion_empresa(instancia);
      assert.equal(existe,true,"El objeto debe ser creado");
  });
  
  it("Conexion BD",function(){
      var db = empresa.ConectionBD();
      assert.equal(db,true,"Debe conectar BD");
  });
  
  it("Test Eliminar Empresa",function(){
      var instancia = empresa.CreacionEmpresa("NuevaEmpresa")
      instancia = empresa.eliminar_empresa(instancia);
      console.log(instancia);
      var existe = empresa.verificar_creacion_empresa(instancia);
      assert.equal(existe,true,"El objeto debe ser borrado");
  });
});