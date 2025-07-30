import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Use export default instead of module.exports
const Task = model('Task', TaskSchema);
export default Task;
