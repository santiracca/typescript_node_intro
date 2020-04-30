"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../models/todo");
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = {
        id: Math.random().toString(),
        text,
    };
    TODOS.push(newTodo);
    res.status(201).json({ message: "Create the todo", createTodo: newTodo });
};
exports.getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updateText);
    res.status(200).json({ message: "Upated", updateTodo: TODOS[todoIndex] });
};
exports.deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo");
    }
    TODOS.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo deleted" });
};
