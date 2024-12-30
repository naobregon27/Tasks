const express = require("express");
require("dotenv").config();
const router = require("./routers/index");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { swaggerUi, swaggerDocs } = require('./config/swagger');
const server = express();

// Aumentar el límite del tamaño del cuerpo de la solicitud a 50mb
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb', extended: true }));

server.use(
  cors({
    credentials: true, // Habilita el envío de cookies y encabezados de autenticación
  })
);

server.use(morgan("dev"));
server.use(helmet());
server.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

server.use('/uploads', express.static('uploads'));
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
server.use(router);

module.exports = server;
