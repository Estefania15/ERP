// backend/routes/productos.js
const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// GET todos los productos
router.get('/', async (req, res) => {
const productos = await Producto.find();
res.json(productos);
});

// POST nuevo producto
router.post('/', async (req, res) => {
const nuevoProducto = new Producto(req.body);
const productoGuardado = await nuevoProducto.save();
res.json(productoGuardado);
});

module.exports = router;
