import {Express, Request, Response} from 'express';
import express = require('express');

const app:Express = express();
const Task = require('../models/task');
var task;

//Get all tasks
app.get("/", async (req:Request, res:Response) => {
    try{
        const tasks = await Task.find();
        //sending the names of the tasks
        res.status(200).json(tasks.map((task:any) => task.name));
    }
    catch (err){
        res.status(500).json({message: err});
    }
});

//Get a task by id
app.get("/:id", getTask, (req:Request, res:Response) => {
    res.json(task.name);
});

//add a new task
app.post("/", async (req:Request, res:Response) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        dueDate: req.body.dueDate,
        subTasks: req.body.subTasks
    });
    try{
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    }
    catch (err){
        res.status(400).json({message: err});
    }
});

//update a task
app.patch("/:", getTask, (req:Request, res:Response) => {

});

//delete a task
app.delete("/:id", getTask ,(req:Request, res:Response) => {

});

//middleware to get a task by id
async function getTask(req:Request, res:Response, next:any){
    try{
        task = await Task.findById(req.params.id);
        if(task == null){
            return res.status(404).json({message: "Cannot find task"});
        }
        res.status(200).json(task);
    }catch (err){
        return res.status(500).json({message: err});
    }
    next();
}

module.exports = app;