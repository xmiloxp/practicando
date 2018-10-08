module.exports = {

    //'url' : 'mongodb://127.1.1.0/express' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
     //Please replace your host file Here : 127.1.1.0 , Express is Collection Name (Database Name)
    url:{
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    },
       
    "development": {
          "username": "root",
          "password": "root",
          "database": "articles",
          "host": "localhost",
          "dialect": "mysql"
        },
        "test": {
          "username": "root",
          "password": "",
          "database": "test",
          "host": "localhost"
          //"dialect": "mysql"
        },
        "production": {
          "username": "root",
          "password": "root",
          "database": "articles",
          "host": "127.0.0.1",
          "dialect": "mysql"
        }
    
};