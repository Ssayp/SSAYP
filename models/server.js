const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { routes } = require('../constants/routes')


const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Conectar a base de datos
        this.connectionDB();

        //Middlewares
        this.middlewares();

        this.routes();

        
    }

    async connectionDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: "/tmp/",
            createParentPath: true
        }));
    }

    routes(){
        routes.forEach(item => {
            this.app.use(item.path, item.route)
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto ", this.port);
        });
    }

}

module.exports = Server;