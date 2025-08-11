// Backend/models/Producto.js
import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;
