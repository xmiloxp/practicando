var home = require('../app/controllers/home');
//const persona = require('../app/controllers/personaController')
//you can include all your controllers

module.exports = function (app, passport) {
    app.get('/listar',home.listar);
    app.post('/agregar',home.agregarPersona)
    app.get('/borrar/:dni',home.borrar)
    app.get('/editar/:dni',home.editar)
    app.post('/editar/:dni',home.update)
    
    app.get('/saludar',(req, res) => {
        res.render('Hola :V');
    })
    app.get('/login', home.login);
    app.get('/signup', home.signup);

    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


}
