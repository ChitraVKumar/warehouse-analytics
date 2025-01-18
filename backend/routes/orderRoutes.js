import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id); // Find order by ID
        if (order) {
            return res.status(404).json({ message: 'Order not found' }); // Handle case where order doesn't exist
        }
        res.json(order); // Send the found order as the response
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle server or database errors
    }
});

// Update order status
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
        res.json(updatedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete an order
router.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: 'Order not found' });
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
