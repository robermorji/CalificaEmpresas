var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Crear_Empresa', function(req,res){
  res.render('crear_empresa');
});


module.exports = router;
