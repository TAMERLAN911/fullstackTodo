const { Router } = require("express");
const { todoController } = require("../controllers/todo.controller");

const router = Router();

router.post("/todo", todoController.postTodos);
router.get("/todo", todoController.getTodos);
router.patch("/todo/:id", todoController.patchTodos);
router.delete("/todo/:id", todoController.deleteTodos);

module.exports = router;
