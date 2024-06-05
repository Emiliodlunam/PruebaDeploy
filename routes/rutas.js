const express = require ("express");
const router = express.Router();
const cuadrado = require("../calculos");

// Rutas    
router.get('/calculos/:width', (req, res) => {
    const { width } = req.params;
    let a = cuadrado.area(width);
    let b = cuadrado.perimetro(width);
    console.log(width, a, b );
    res.send({
        mensaje: "La figura es un cuadrado",
        ancho: width,
        area: a,
        perimetro: b
    });
});

/* router.get('/', (req,res)=>{
    res.send({message:"Hola mundo soy Emilio De Luna"})
}); */

router.get('/', function(req, res){
    res.sendFile(process.cwd() + '/public/index.html');
});

router.get('/ayuda/:name', (req,res) => {
    res.send({message:`Hola ${req.params.name} en que te ayudo`});
});

router.get('/prueba', (req,res) => {
    res.send({message:`Hola ${req.query.name} ${req.query.apellido}`});
});

router.get('/datos', (req, res) => {
    res.send({
        "secretBase": "Hidden Fortress",
        "active": false,
        "members": [
            {
                "name": "Emilio De Luna",
                "age": 27,
                "secretIdentity": "Alex Night",
                "powers": [
                    "Invisibility",
                    "Telepathy",
                    "Shadow manipulation"
                ]
            },
            {
                "name": "Thunderstrike",
                "age": 35,
                "secretIdentity": "Max Storm",
                "powers": [
                    "Weather control",
                    "Electric manipulation",
                    "Flight"
                ]
            },
            {
                "name": "Mystic Muse",
                "age": 42,
                "secretIdentity": "Luna Harper",
                "powers": [
                    "Spell casting",
                    "Telekinesis",
                    "Astral projection"
                ]
            },
            {
                "name": "Iron Guardian",
                "age": 30,
                "secretIdentity": "Sam Steele",
                "powers": [
                    "Super strength",
                    "Invulnerability",
                    "Mechanical transformation"
                ]
            }
        ]
    });    
});

// Postman
router.post("/ayuda", (req, res)=>{
    console.log("Cuerpo de la petición:", req.body);
    res .send({
        message: "Hola mundo en que te puedo ayudar, soy una peticion de post",
    });
});

router.post("/producto", (req, res) => {
    console.log("Cuerpo de la peticion: ", req.body);
    //La sintaxis de desestructuración es una funcionalidad que vino
    // junto con ES6. Es una expresión de JavaScript que permite
    //desempacar valores de arreglos o propiedades de objetos en distintas variables; const { nombre, sueldo, categoria } = req.body;
    const { nombre, sueldo, categoria } = req.body;
    console.log(nombre);
    console.log(sueldo);
    console.log(categoria);
    res.send({ message: "El producto se ha recibido" });
});

router.post('/producto/:id', (req, res)=> {
    const { id } = req.params;
    const { motor } = req.query;
    const { precio } = req.body;
    console.log(id,motor,precio);
    res.json({
        stockmin: 10,
        stockmax: 15,
        existencia: 7
    });
});

module.exports = router;