import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    itemSku: { type: String, required: true }, // Links to Inventory by SKU
    quantity: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'fulfilled', 'shipped', 'cancelled'], 
        default: 'pending' 
    },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
