import express from 'express';
import bodyParser from 'body-parser'; // Default import
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import inventoryRoutes from './routes/inventoryRoutes.js'; // Import inventory routes

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();

connectDB();



// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/inventory', inventoryRoutes); // All inventory routes will be prefixed with /api/inventory

// Test Route
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// Test MongoDB Connection with Sample Data
// app.get('/test-db', async (req, res) => {
//     try {
//         // Insert a sample inventory item
//         const newItem = await Inventory.create({
//             itemName: 'Sample Item',
//             sku: 'SAMPLE123',
//             quantity: 100,
//             reorderLevel: 10,
//             location: 'Aisle 3',
//         });

//         // Retrieve all inventory items
//         const inventory = await Inventory.find();

//         // Respond with the inventory data
//         res.json(inventory);
//     } catch (err) {
//         // Handle errors
//         res.status(500).json({ error: err.message });
//     }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
