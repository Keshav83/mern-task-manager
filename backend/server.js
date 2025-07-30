import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import tasksRouter from './routes/tasks.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json()); 


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello from the MERN stack backend!');
});

// Use the tasks router
// All routes in tasks.js will be prefixed with /tasks
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
