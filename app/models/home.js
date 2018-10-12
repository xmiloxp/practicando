const mysql = require('mysql')
const db = require('../../config/database')
const connection = mysql.createConnection(db.test)

let datos = null;
exports.traerPersona = (req, res) =>{
	connection.query("SELECT * FROM persona", (error, results, fields) => {
		res.render("personaVista", {
		  data: results
		});
	  });
}
exports.agregarPersona = (req, res) =>{
	//console.log(req.body)
	const {dni,nombres,apellidos} = req.body
	connection.query('INSERT INTO persona SET?',{
		dni,
		nombres,
		apellidos
	},(err,result) =>{
		res.redirect('/listar')
	}
	)
}
exports.borrar = (req, res) => {
	const { dni } = req.params
	connection.query('DELETE FROM persona WHERE dni = ?',[dni],(err, rows) => {
		console.log(dni)
		res.redirect('/listar');
	})
}