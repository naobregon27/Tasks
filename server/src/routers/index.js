const { Router } = require("express");
const router = Router();

const prueba = require ("./prueba.router.js")

router.use("/", prueba);

module.exports = router;