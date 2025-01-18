import express from 'express';
import Inventory from '../models/Inventory.js';

const router = express.Router();

// Create a new inventory item
router.post('/', async (req, res) => {
    try {
        const newItem = await Inventory.create(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read all inventory items
router.get('/', async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Retrieve a single inventory item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id); // Find item by ID
        if (!item) {
            return res.status(404).json({ message: 'Item not found' }); // Handle case where item doesn't exist
        }
        res.json(item); // Send the found item as the response
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle server or database errors
    }
});

// Update an inventory item
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete an inventory item
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
