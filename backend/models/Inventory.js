import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    reorderLevel: { type: Number, required: true },
    location: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now },
});

const Inventory = mongoose.model('Inventory', inventorySchema);
export default Inventory;
