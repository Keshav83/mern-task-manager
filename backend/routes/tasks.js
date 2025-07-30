import { Router } from "express";
import Task from "../models/Task.js";

const router = Router();

router.route('/').get((req,res)=>{
      Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const newTask = new Task({title});

    newTask.save()
        .then(()=>res.json('Task Adedd'))
        .catch(err => res.status(400).json('Error:' + err));
    
});

router.route('/:id').delete((req,res)=>{
   Task.findByIdAndDelete(req.params.id)
   .then(()=> res.json('Task Deleted'))
   .catch(err => res.status(400).json('Error:' + err));
})

router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.isCompleted = !task.isCompleted; // Toggle completion status
            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

export default router;