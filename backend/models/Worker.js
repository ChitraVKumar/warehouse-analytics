import mongoose from 'mongoose';

const workerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true }, // e.g., Picker, Packer
    tasksCompleted: { type: Number, default: 0 },
    shiftStart: { type: Date },
    shiftEnd: { type: Date },
});

const Worker = mongoose.model('Worker', workerSchema);

export default Worker;
