const express = require('express');
const Todo = require("../model/todo");

const router = express.Router();
router.post("/" , (req, res) => {
    const todo = new Todo(req.body);
    todo.save((err , todo) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(todo);
        }
    });
});


router.get("/" , (req , res) => {
    Todo.find((err , todos) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(todos);
        }
    })
});


router.get("/:id" , (req , res) => {
    console.log(req.params);    
    Todo.findById(req.params.id  , (err , todo) => {
        if(err){
            res.status(500).send(err);
        }else{
            if(!todo){
                res.status(404).send();
            }else{
                res.status(200).send(todo);
            }
        }
    });
});

router.put("/:id" , (req , res) => {
    Todo.findByIdAndUpdate(req.params.id , req.body , {new:true} , (err , todo) => {
        if(err) res.status(500).send(err);
        if(!todo) res.status(404).send();
        res.status(200).send(todo)
    });
});

router.delete("/:id" , (req,res) => {
    Todo.findByIdAndRemove(req.params.id , (err , todo) => {
        if(err) res.status(500).send(err);
        if(!todo) res.status(404).send();
        res.status(200).send(todo);
    })
} )


module.exports = router;