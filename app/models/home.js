const mysql = require('mysql')
const db = require('../../config/database')
const connection = mysql.createConnection(db.url)

let datos = null;
exports.traerPersona = (req, res) =>{
	
	connection.query('SELECT * FROM persona',(error, results, fields) =>{
		datos = results;
	})
	//connection.end()
	return datos;
}
exports.agregarPersona = (req, res) =>{
	//console.log(req.body)
	const {dni,nombres,apellidos} = req.body
	connection.query('INSERT INTO persona SET?',{
		dni,
		nombres,
		apellidos
	},(err,result) =>{
		if(err)
			res.redirect('/listar')
	} )
}