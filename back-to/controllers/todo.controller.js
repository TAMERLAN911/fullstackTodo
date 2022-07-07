const Todo = require("../models/Todo.model");

module.exports.todoController = {
  postTodos: async (req, res) => {
    try {
      const result = await Todo.create({
        text: req.body.text,
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  patchTodos: async (req, res) => {
    try {
      const result = await Todo.findByIdAndUpdate(req.params.id, {

        done: req.body.done,
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  getTodos: async (req, res) => {
    try {
      const result = await Todo.find();
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  deleteTodos: async (req, res) => {
    try {
      await Todo.findByIdAndRemove(req.params.id);
      res.json("удалено");
    } catch (error) {
      res.json(error);
    }
  },
};
