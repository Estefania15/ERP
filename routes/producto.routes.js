import express from 'express';
import Producto from '../models/producto.model.js';

const router = express.Router();

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
    const { name, quantity, price } = req.body;

    const producto = new Producto({
        name,
        quantity,
        price,
    });


try {
    const newProduct = new Producto(req.body);
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(400).send("Error al guardar el producto");
  }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
